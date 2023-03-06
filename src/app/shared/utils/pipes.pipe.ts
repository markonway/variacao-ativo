import { Pipe } from "@angular/core";

@Pipe({
  name: 'dynamicMasks',
})
export class Pipes {

  constructor() { }

  toCurrency(value): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(value);
  }

  generateId(): string {
    return Math.floor(Math.random() * Date.now()).toString();
  }

}
