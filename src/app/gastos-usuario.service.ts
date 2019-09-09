import { Injectable } from '@angular/core';

export interface Gasto {
  id: string;
  valor: string;
  moeda: string;
  participantes: string;
  criador: string;
  titulo: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})


export class GastosUsuarioService {

  gastos: Gasto[] = [
    {
      id: '0',
      valor: '250.00',
      moeda: 'BRL',
      participantes: 'Cadu e Arnaldo',
      criador: 'Cadu',
      titulo: 'Bebidas Wallparty',
      descricao: 'Garrafas de Whisky Bourbon no cartão do Cadu'
    },
    {
      id: '1',
      valor: '20.00',
      moeda: 'BRL',
      participantes: 'Cadu e Fernando',
      criador: 'Cadu',
      titulo: 'Emprestimo',
      descricao: 'Emprestimo para recarga de passagem'
    },
    {
      id: '2',
      valor: '20.00',
      moeda: 'BRL',
      participantes: 'Cadu e Fernando',
      criador: 'Cadu',
      titulo: 'Emprestimo',
      descricao: 'Emprestimo para recarga de passagem'
    },
    {
      id: '3',
      valor: '20.00',
      moeda: 'BRL',
      participantes: 'Cadu e Fernando',
      criador: 'Cadu',
      titulo: 'Emprestimo',
      descricao: 'Emprestimo para recarga de passagem'
    },
    {
      id: '4',
      valor: '20.00',
      moeda: 'BRL',
      participantes: 'Cadu e Fernando',
      criador: 'Cadu',
      titulo: 'Emprestimo',
      descricao: 'Emprestimo para recarga de passagem'
    },
    {
      id: '5',
      valor: '20.00',
      moeda: 'BRL',
      participantes: 'Cadu e Fernando',
      criador: 'Cadu',
      titulo: 'Emprestimo',
      descricao: 'Emprestimo para recarga de passagem'
    },
    {
      id: '6',
      valor: '20.00',
      moeda: 'BRL',
      participantes: 'Cadu e Fernando',
      criador: 'Cadu',
      titulo: 'Emprestimo',
      descricao: 'Emprestimo para recarga de passagem'
    }
  ];

  getGastos(): Gasto[] {
    return this.gastos;
  }

  constructor() { }
}
