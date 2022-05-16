import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { UserController } from './user/user.controller';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ConfigModule, ClientModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
