import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YouapiModule } from './youapi/youapi.module';

@Module({
  imports: [

    YouapiModule, MongooseModule.forRoot('mongodb://localhost/youappdb')

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
