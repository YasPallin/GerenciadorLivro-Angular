import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable()
export class LivroService {

  constructor() { }

  listarTodos(): Livro[]{ //vem de model
    const livros = localStorage['livros'] 
    return livros ? JSON.parse(livros): []; 
  }

  cadastrar(livro: Livro):void{  
    const livros = this.listarTodos();
    livro.id = new Date().getTime();
	console.log(livros)
    livros.push(livro);
    localStorage['livros'] = JSON.stringify(livros)
  }
}
