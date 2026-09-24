import { Injectable, signal } from '@angular/core';
import { Item, Produto } from './item';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens = signal<Item[]>([]);

  adicionar(produto: Produto): void {
    const item = this.itens().find(
      item => item.produto.id === produto.id
    );

    if (item) {
      this.aumentar(item.id);
      return;
    }

    this.itens.update(itens => [
      ...itens,
      {
        id: produto.id,
        produto: produto,
        quantidade: 1
      }
    ]);
  }

  aumentar(id: number): void {
    this.itens.update(itens =>
      itens.map(item =>
        item.id === id
          ? {
              ...item,
              quantidade: item.quantidade + 1
            }
          : item
      )
    );
  }

  diminuir(id: number): void {
    this.itens.update(itens =>
      itens
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantidade: item.quantidade - 1
              }
            : item
        )
        .filter(item => item.quantidade > 0)
    );
  }

  remover(id: number): void {
    this.itens.update(itens =>
      itens.filter(item => item.id !== id)
    );
  }

  obterTotal(): number {
    return this.itens().reduce(
      (total, item) =>
        total + item.produto.preco * item.quantidade,
      0
    );
  }
}