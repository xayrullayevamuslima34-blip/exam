import { BadRequestException, Injectable } from '@nestjs/common';
import {User} from "../../entities/authentication.entity";
import {OtpType} from "../../../../core/enums/otp-type.enum";
import {OtpCode} from "../../entities/otp-codes.entity";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OtpCodePublicService {

    constructor(private readonly config: ConfigService) {}

    async sendOtp(user: User, type: OtpType) {
        await this.deleteOtps(user.id);

        let otpCode = OtpCode.create({
            userId: user.id,
            code: this.generateOtp(),
            type: type,
        });

        await OtpCode.save(otpCode);
        console.log(otpCode);
    }

    async verifyOtp(userId: number, code: string) {
        let otpCode = await OtpCode.findOneBy({ userId: userId });

        if (!otpCode || otpCode.code !== code) {
            throw new BadRequestException('Codes do not match');
        }

        let otpExpire = this.config.getOrThrow<number>('OTP_EXPIRE') * 1000;
        let difference = Date.now() - Date.parse(otpCode.createdAt);
        if (difference > otpExpire) {
            throw new BadRequestException('Code expired');
        }

        return true;
    }

    private generateOtp(): string {
        let otpCode = Math.floor(Math.random() * 1_000_000).toString(10);
        let code: any[] = [];
        for (let i = 0; i < 6 - otpCode.length; i++) {
            code.push(0);
        }

        code.push(otpCode);

        return code.join();
    }

    private async deleteOtps(userId: number) {
        let otpCodes = await OtpCode.findBy({ userId });
        await OtpCode.remove(otpCodes);
    }
}
