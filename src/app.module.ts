import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatesController } from './controllers/states.controller';

@Module({
  imports: [],
  controllers: [AppController, StatesController],
  providers: [AppService],
})
export class AppModule {}
