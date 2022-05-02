import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a message to the user', async () => {
      const result = [
        {
          title: 'Welcome to easier nest server',
          subtitle:
            'This is a simple nest server that uses only controllers and functional handlers',
          routes: [{ path: '/hello' }, { path: '/hello/:name' }],
        },
      ];
      jest
        .spyOn(appService, 'getRootServerMessage')
        .mockImplementation(async () => result);
      expect(await appController.getMessage()).toBe(result);
    });
  });
});
