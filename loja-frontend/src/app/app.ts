import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Produto } from './item';
import { CarrinhoService } from './carrinho-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('loja-frontend');

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      preco: 100
    },
    {
      id: 2,
      nome: 'Produto 2',
      preco: 200
    },
    {
      id: 3,
      nome: 'Produto 3',
      preco: 300
    }
  ];

  constructor(
    public carrinhoService: CarrinhoService
  ) {}

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionar(produto);
  }

}