import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatesController } from './states/states.controller';

@Module({
  imports: [],
  controllers: [AppController, StatesController],
  providers: [AppService],
})
export class AppModule {}
