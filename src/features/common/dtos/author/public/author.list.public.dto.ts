import { ApiProperty } from "@nestjs/swagger";

export class AuthorsListPublicDto {
    @ApiProperty()
    id!:number

    @ApiProperty()
    fullName!: string;
}