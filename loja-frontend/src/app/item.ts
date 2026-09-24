export interface Produto {
  id: number;
  nome: string;
  preco: number;
}
export interface Item {
  id: number;
  produto: Produto;
  quantidade: number;
}