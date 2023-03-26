import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateYouapiDto } from './dto/create-youapi.dto';
import { UpdateYouapiDto } from './dto/update-youapi.dto';
import { Youapi } from './entities/youapi.entity';
import { yourapi, yourapiDocument } from './schemas/youapi.schema';

@Injectable()
export class YouapiService {
  constructor(@InjectModel(yourapi.name) private yourapiModel: Model<yourapiDocument>) { }

  async create(createYouapiDto: CreateYouapiDto): Promise<Youapi> {
    return new this.yourapiModel(createYouapiDto).save();
  }

  async findAll() {
    return this.yourapiModel.find();
  }

  async findOne(name: string) {
    return this.yourapiModel.findOne({ name });
  }

  async update(iddb: string, updateYouapiDto: UpdateYouapiDto) {
    return this.yourapiModel.updateOne({ iddb }, { $set: { ...updateYouapiDto } });
  }

  async remove(iddb: string) {
    return this.yourapiModel.deleteOne({ iddb });
  }
}
