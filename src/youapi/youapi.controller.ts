import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YouapiService } from './youapi.service';
import { CreateYouapiDto } from './dto/create-youapi.dto';
import { UpdateYouapiDto } from './dto/update-youapi.dto';

@Controller('youapi')
export class YouapiController {
  constructor(private readonly youapiService: YouapiService) { }

  @Post()
  create(@Body() createYouapiDto: CreateYouapiDto) {
    return this.youapiService.create(createYouapiDto);
  }

  @Get()
  findAll() {
    return this.youapiService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.youapiService.findOne(name);
  }

  @Patch(':iddb')
  update(@Param('iddb') name: string, @Body() updateYouapiDto: UpdateYouapiDto) {
    return this.youapiService.update(name, updateYouapiDto);
  }

  @Delete(':iddb')
  remove(@Param('iddb') iddb: string) {
    return this.youapiService.remove(iddb);
  }
}
