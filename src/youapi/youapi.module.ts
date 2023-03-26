import { Module } from '@nestjs/common';
import { YouapiService } from './youapi.service';
import { YouapiController } from './youapi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { yourapi, yourapiSchema } from './schemas/youapi.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: yourapi.name, schema: yourapiSchema }])],
  controllers: [YouapiController],
  providers: [YouapiService]
})
export class YouapiModule { }
