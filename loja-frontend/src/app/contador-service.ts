import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class ContadorService {
  readonly contador: WritableSignal<number> =
    signal<number>(0)

  incrementar() {
    this.contador.update((valor) => valor + 1)
  }

  decrementar() {
    this.contador.update((valor) => valor - 1)
  }

  reiniciar() {
    this.contador.set(0)
  }
}