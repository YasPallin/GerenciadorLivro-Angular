import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable()
export class LivroService {

  constructor() { }

  listarTodos(): Livro []{  //esse Livros vem do model
    const livros = localStorage['livros']
    return livros ? JSON.parse(livros) : [];
  }
}
