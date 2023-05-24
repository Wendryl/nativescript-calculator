import { Observable } from '@nativescript/core'

export class HelloWorldModel extends Observable {
  private _operacoes: Array<string> = [
    'Adição',
    'Subtração',
    'Divisão',
    'Multiplicação',
  ];

  private _operacaoSelecionada: number = 0;
  private _valor1: number = 0;
  private _valor2: number = 0;
  private _resultado: string = '0';

  constructor() {
    super()
  }

  get operacoes(): Array<string> {
    return this._operacoes;
  }

  get valor1(): string {
    return this._valor1.toString();
  }

  set valor1(newValue: string) {
    this._valor1 = parseFloat(newValue);
    this.notifyPropertyChange('valor1', newValue);
  }

  get valor2(): string {
    return this._valor2.toString();
  }

  set valor2(newValue: string) {
    this._valor2 = parseFloat(newValue);
    this.notifyPropertyChange('valor2', newValue);
  }

  get operacaoSelecionada(): number {
    return this._operacaoSelecionada;
  }

  set operacaoSelecionada(newValue: number) {
    this._operacaoSelecionada = newValue;
    this.notifyPropertyChange('operacaoSelecionada', newValue);
  }

  get resultado(): string {
    return 'Resultado: ' + this._resultado;
  }

  set resultado(newValue: string) {
    this._resultado = 'Resultado: ' + newValue;
    this.notifyPropertyChange('resultado', this._resultado);
  }

  calcular() {
    if (this.operacaoSelecionada === 0) {
      this.resultado = (this._valor1 + this._valor2).toString();
      return;
    }

    if (this.operacaoSelecionada === 1) {
      this.resultado = (this._valor1 - this._valor2).toString();
      return;
    }

    if (this.operacaoSelecionada === 2) {
      this.resultado = (this._valor1 * this._valor2).toString();
      return;
    }

    if (this.operacaoSelecionada === 3) {
      this.resultado = (this._valor1 / this._valor2).toString();
      return;
    }
  }
}
