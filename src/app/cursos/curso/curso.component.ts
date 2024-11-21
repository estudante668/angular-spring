import { Component } from '@angular/core';
import { Curso } from '../../curso/objetos/curso';
import { MatTableModule } from '@angular/material/table'; 
import { CursoService } from '../../servicos/curso.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [MatTableModule, MatToolbarModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent {
  
  displayedColumns: string[] = ['nome', 'curso'];
  cursos: Curso[] = [];
  servicosCursos: CursoService;
  
  constructor(){
    this.servicosCursos = new CursoService();
    this.cursos = this.servicosCursos.listaUsuarios();
  }

}
