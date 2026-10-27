import { Injectable } from '@angular/core';

export interface Emprestimo {
  id: number;
  nomePessoa: string;
  tituloLivro: string;
  dataPrevistaDevolucao: Date;
  devolvido: boolean;
}

@Injectable({ providedIn: 'root' })
export class EmprestimoService {
  private emprestimos: Emprestimo[] = [];
  private proximoId = 1;

  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  adicionar(nomePessoa: string, tituloLivro: string, dataPrevistaDevolucao: Date): void {
    this.emprestimos.push({
      id: this.proximoId++,
      nomePessoa,
      tituloLivro,
      dataPrevistaDevolucao,
      devolvido: false,
    });
  }

  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter(e => e.id !== id);
  }

  registrarDevolucao(id: number): void {
    const emprestimo = this.emprestimos.find(e => e.id === id);
    if (emprestimo) {
      emprestimo.devolvido = true;
    }
  }
}