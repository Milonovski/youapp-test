import { PartialType } from '@nestjs/mapped-types';
import { CreateYouapiDto } from './create-youapi.dto';

export class UpdateYouapiDto extends PartialType(CreateYouapiDto) {}
