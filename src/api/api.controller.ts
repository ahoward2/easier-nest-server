import { All, Controller, Req, Res } from '@nestjs/common';
import { routeConfig as helloConfig } from './routes/hello/hello';
import { routeConfig as helloParamConfig } from './routes/hello/helloParam';

/**
 * This is the core controller for API routes. To create routes for the API,
 * simply create a new route under the routes folder, and export an async
 * handler function, and a routeConfig object that contains the path for the route
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
@Controller('api')
export class ApiController {
  @All(helloConfig.path)
  async executeHelloHandler(@Req() req, @Res() res) {
    return helloConfig.handler(req, res);
  }

  @All(helloParamConfig.path)
  async executeHelloNameHandler(@Req() req, @Res() res) {
    return helloParamConfig.handler(req, res);
  }
}
