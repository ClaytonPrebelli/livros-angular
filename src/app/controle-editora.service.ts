import { Injectable } from '@angular/core';
import { Editora } from './editora';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
  ];

  constructor() { }
  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }
}
