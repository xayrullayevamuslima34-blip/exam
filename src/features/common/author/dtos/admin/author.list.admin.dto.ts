import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class AuthorsListAdminDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    fullName!: string;
}