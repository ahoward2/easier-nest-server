import { All, Controller, Req, Res } from '@nestjs/common';

@Controller('api')
export class ApiController {
  // constructor(private readonly appService: AppService) {}

  @All()
  executeHandler(@Req() req, @Res() res) {
    return handler(req, res);
  }
}

async function handler(req, res) {
  res.send('Request url from handler: ' + req.url);
}
