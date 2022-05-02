import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';

describe('ApiController', () => {
  let apiController: ApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
    }).compile();

    apiController = app.get<ApiController>(ApiController);
  });

  describe('GET /api/hello', () => {
    it('should return {"url":"/api/hello"}', async () => {
      const mockResult = {
        url: '/hello',
      };
      const mockRequest = {
        method: 'GET',
        url: '/hello',
      };
      const mockResponse = {
        json: jest.fn().mockReturnValue(mockResult),
      };
      expect(
        await apiController.executeHelloHandler(mockRequest, mockResponse),
      ).toBe(mockResult);
    });
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
        await apiController.executeHelloNameHandler(mockRequest, mockResponse),
      ).toBe(mockResult);
    });
  });
});
