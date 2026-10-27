import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmprestimoService } from '../Service/emprestimo-service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css',
})
export class CadastrarEmprestimo {
  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';

  constructor(private service: EmprestimoService, private router: Router) {}

  cadastrar(): void {
    this.service.adicionar(
      this.nomePessoa,
      this.tituloLivro,
      new Date(this.dataPrevistaDevolucao + 'T00:00:00')
    );
    this.router.navigate(['/lista-emprestimos']);
  }
}