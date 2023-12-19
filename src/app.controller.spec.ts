import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('fib', () => {
    it('should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
      expect(appController.getFib(9, false)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('should sequence of 9 as string', () => {
      expect(appController.getFib(9, true)).toStrictEqual(['0', '1', '1', '2', '3', '5', '8', '13', '21', '34']);
    });
  });

  describe('fac', () => {
    it('should sequence of 9]', () => {
      expect(appController.getFac(9, false)).toStrictEqual([1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]);
    });

    it('should sequence of 9 as string', () => {
      expect(appController.getFac(9, true)).toEqual([
        '1',
        '1',
        '2',
        '6',
        '24',
        '120',
        '720',
        '5,040',
        '40,320',
        '362,880',
      ]);
    });
  });
});
