import * as React from 'react';
import { Controller, Get, Headers, Res } from '@nestjs/common';
import { renderToReadableStream } from 'react-dom/server';
import { Readable } from 'node:stream';

import type { Response } from 'express';
import { AppService } from './app.service';
import { Layout } from './views/layout';
import { Home } from './views/home';
import { Page1 } from './views/page1';
import { Page2 } from './views/page2';

const renderToClient = async (res: Response, component: React.ReactNode) => {
  const stream = await renderToReadableStream(component, {});

  res.setHeader('Content-Type', 'text/html');
  const nodeStream = Readable.fromWeb(stream as any);
  nodeStream.pipe(res);
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async home(@Res() res: Response, @Headers('HX-Request') htmxHeader: string) {
    const content = React.createElement(Home);

    if (htmxHeader === 'true') {
      return renderToClient(res, content);
    }

    renderToClient(res, React.createElement(Layout, { content }));
  }

  @Get('/page1')
  async page1(@Res() res: Response, @Headers('HX-Request') htmxHeader: string) {
    const time = this.appService.getTime();
    const content = React.createElement(Page1, {
      time,
    });

    if (htmxHeader === 'true') {
      return renderToClient(res, content);
    }

    renderToClient(res, React.createElement(Layout, { content }));
  }

  @Get('/page2')
  async page2(@Res() res: Response, @Headers('HX-Request') htmxHeader: string) {
    const content = React.createElement(Page2, {
      message: 'This is the page 2',
    });

    if (htmxHeader === 'true') {
      return renderToClient(res, content);
    }

    renderToClient(res, React.createElement(Layout, { content }));
  }
}
