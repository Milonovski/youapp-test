import { Test, TestingModule } from '@nestjs/testing';
import { YouapiService } from './youapi.service';

describe('YouapiService', () => {
  let service: YouapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YouapiService],
    }).compile();

    service = module.get<YouapiService>(YouapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
