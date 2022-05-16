import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    index(): string {
        return "soy del index del user controller";
    }
}
