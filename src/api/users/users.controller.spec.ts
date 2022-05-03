import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
  });

  describe('GET /api/users/detail?github=ahoward2&gitlab=ahoward21', () => {
    it('should return {"github":"ahoward2", "gitlab": "ahoward21"}', async () => {
      const mockResult = {
        github: 'ahoward2',
        gitlab: 'ahoward21',
      };
      const mockRequest = {
        method: 'GET',
        query: {
          github: 'ahoward2',
          gitlab: 'ahoward21',
        },
      };
      const mockResponse = {
        json: jest.fn().mockReturnValue(mockResult),
      };
      expect(
        await usersController.executeUserDetail(mockRequest, mockResponse),
      ).toBe(mockResult);
    });
  });
});
