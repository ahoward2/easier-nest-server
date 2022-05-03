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

  describe('GET /api/hello/:name', () => {
    it('should return {"message":"Hello Austin!"}', async () => {
      const mockResult = {
        message: 'Hello Austin!',
      };
      const mockRequest = {
        method: 'GET',
        params: {
          name: 'Austin',
        },
      };
      const mockResponse = {
        json: jest.fn().mockReturnValue(mockResult),
      };
      expect(
        await usersController.executeHelloNameHandler(
          mockRequest,
          mockResponse,
        ),
      ).toBe(mockResult);
    });
  });
});
