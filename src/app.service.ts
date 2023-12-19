import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFibs(n: number): number[] {
    return this.fib(n);
  }

  private fib(n: number): number[] {
    const fib: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

  getFactorials(n: number): number[] {
    const fac: number[] = [1];
    for (let i = 1; i <= n; i++) {
      fac[i] = fac[i - 1] * i;
    }
    return fac;
  }

  prettyNumbers(n: number[]): string[] {
    return n.map((x) => x.toLocaleString('pl-PL'));
  }
}
