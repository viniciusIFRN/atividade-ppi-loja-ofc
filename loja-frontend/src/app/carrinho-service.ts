import { Injectable, signal, computed } from '@angular/core';
import { Item, Produto } from './item';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens = signal<Item[]>([]);

  quantidade = computed(() =>
    this.itens().reduce(
      (total, item) => total + item.quantidade,
      0
    )
  );

  adicionar(produto: Produto) {

    this.itens.update(itens => {

      const itemExistente = itens.find(
        item => item.produto.id === produto.id
      );

      if (itemExistente) {

        return itens.map(item =>
          item.produto.id === produto.id
            ? {
                ...item,
                quantidade: item.quantidade + 1
              }
            : item
        );

      }

      return [
        ...itens,
        {
          id: produto.id,
          produto: produto,
          quantidade: 1
        }
      ];

    });

  }
}