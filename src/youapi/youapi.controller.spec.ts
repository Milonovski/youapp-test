import { Test, TestingModule } from '@nestjs/testing';
import { YouapiController } from './youapi.controller';
import { YouapiService } from './youapi.service';

describe('YouapiController', () => {
  let controller: YouapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YouapiController],
      providers: [YouapiService],
    }).compile();

    controller = module.get<YouapiController>(YouapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
