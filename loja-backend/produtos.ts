export type Produto = {
    id: number
    nome: string
    descricao: string
    preco: number
    quantidade: number
    foto: string
}

export const produtos: Produto[] = [
  {
    "id": 1,
    "nome": "Smartphone Galaxy S23",
    "descricao": "Smartphone Samsung Galaxy S23 128GB, 8GB RAM, Câmera Tripla 50MP.",
    "preco": 3499.00,
    "quantidade": 15,
    "foto": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
  },
  {
    "id": 2,
    "nome": "Notebook Dell Inspiron 15",
    "descricao": "Notebook Dell Inspiron 15, Processador Intel Core i5, 16GB RAM, SSD 512GB.",
    "preco": 3899.90,
    "quantidade": 8,
    "foto": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
  },
  {
    "id": 3,
    "nome": "Fone de Ouvido Bluetooth Sony WH-1000XM5",
    "descricao": "Headphone sem fio Sony com cancelamento de ruído ativo e alta qualidade de áudio.",
    "preco": 2199.00,
    "quantidade": 22,
    "foto": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    "id": 4,
    "nome": "Smartwatch Apple Watch Series 9",
    "descricao": "Relógio inteligente Apple Watch Series 9 GPS, Caixa de Alumínio 45mm.",
    "preco": 3299.00,
    "quantidade": 10,
    "foto": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    "id": 5,
    "nome": "Teclado Mecânico Logitech MX Keys",
    "descricao": "Teclado sem fio avançado com iluminação inteligente e conexão multidispositivo.",
    "preco": 699.90,
    "quantidade": 30,
    "foto": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
  }
]