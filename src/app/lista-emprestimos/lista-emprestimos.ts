import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Emprestimo, EmprestimoService } from '../Service/emprestimo-service';

@Component({
  selector: 'app-lista-emprestimos',
  imports: [DatePipe],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css',
})
export class ListaEmprestimos {
  constructor(private service: EmprestimoService) {}

  get emprestimos(): Emprestimo[] {
    return this.service.listar();
  }

  get total(): number {
    return this.emprestimos.length;
  }

  get emAberto(): number {
    return this.emprestimos.filter(e => !e.devolvido).length;
  }

  get devolvidos(): number {
    return this.emprestimos.filter(e => e.devolvido).length;
  }

  remover(id: number): void {
    this.service.remover(id);
  }

  registrarDevolucao(id: number): void {
    this.service.registrarDevolucao(id);
  }
}