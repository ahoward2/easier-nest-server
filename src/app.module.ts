import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ApiModule,
    CacheModule.register({ isGlobal: true, ttl: 1000, max: 100 }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
