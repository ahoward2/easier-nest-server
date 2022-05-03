import {
  All,
  CacheInterceptor,
  Controller,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { RouteConfig as UserDetailConfig } from './routes/users/user.detail';

/**
 * This is the core controller for API routes. To create routes for the API,
 * simply create a new route under the routes folder, create an async
 * handler function, and export a routeConfig object that contains the path for the route
 * and the handler function. Import it into this file and add it under the
 * ApiController class.
 * 
 * E.g. -> routes/hello/hello.ts
 * 
  async function handler(req, res) {
  if (req.method === 'GET') {
    return res.json({ url: req.url });
  }
  }

  export const routeConfig = {
    path: '/hello',
    handler: handler,
  };
 */

@Controller('api/users')
@UseInterceptors(CacheInterceptor)
export class UsersController {
  @All(UserDetailConfig.path)
  async executeUserDetail(@Req() req, @Res() res) {
    return UserDetailConfig.handler(req, res);
  }
}
