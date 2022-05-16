import { Controller, Get } from '@nestjs/common';

@Controller('config')
export class ConfigController {

  @Get()
  findAll() {
    return "soy el index del modulo config";
  }
}
