import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {
	livros: Livro [];

  constructor (private livroService: LivroService) { }

  ngOnInit(): void {
	  this.livros = this.listarTodos();
	  this.livros = [
		new Livro(1, "It, A Coisa", "Stephen King", false),
		new Livro(2, "Desespero", "Stephen King", false),
		new Livro(3, "Carrie, A Estranha", "Stephen King", false)
	  ]
  }
  listarTodos(): Livro []{
	  return this.livroService.listarTodos();
  }
}
