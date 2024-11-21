import { Component } from '@angular/core';
import { Curso } from '../../curso/objetos/curso';
import { MatTableModule } from '@angular/material/table'; 
import { CursoService } from '../../servicos/curso.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { CommonModule, NgIf } from '@angular/common';



@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [MatTableModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent {
  
  displayedColumns: string[] = ['nome', 'curso'];
  cursos$: Observable<Curso[]>;

  
  constructor(private servicosCursos: CursoService){
    //this.servicosCursos = new CursoService();
    this.cursos$ = this.servicosCursos.listaUsuarios();
  }

}
