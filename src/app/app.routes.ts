import { Routes } from '@angular/router';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimos } from './lista-emprestimos/lista-emprestimos';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar-emprestimo', pathMatch: 'full' },
  { path: 'cadastrar-emprestimo', component: CadastrarEmprestimo },
  { path: 'lista-emprestimos', component: ListaEmprestimos },
];