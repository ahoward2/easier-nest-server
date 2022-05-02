import { Injectable } from '@nestjs/common';

export type Routes = {
  path: string;
};

export type Message = {
  title: string;
  subtitle: string;
  routes: Routes[];
}[];

const message: Message = [
  {
    title: 'Welcome to easier nest server',
    subtitle:
      'This is a simple nest server that uses only controllers and functional handlers',
    routes: [
      {
        path: '/hello',
      },
      {
        path: '/hello/:name',
      },
    ],
  },
];
@Injectable()
export class AppService {
  async getRootServerMessage(): Promise<Message> {
    return message;
  }
}
