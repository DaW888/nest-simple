import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fib/:n')
  getFib(@Param('n') n: number, @Query('pretty') pretty: boolean): number[] | string[] {
    if (pretty) {
      return this.appService.prettyNumbers(this.appService.getFibs(n));
    }
    return this.appService.getFibs(n);
  }

  @Get('/fac/:n')
  getFac(@Param('n') n: number, @Query('pretty') pretty: boolean): number[] | string[] {
    if (pretty) {
      return this.appService.prettyNumbers(this.appService.getFactorials(n));
    }
    return this.appService.getFactorials(n);
  }
}
