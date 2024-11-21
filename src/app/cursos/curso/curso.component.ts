import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Curso } from '../../curso/objetos/curso';
import { CursoService } from '../curso.service';
import { Observable } from 'rxjs';




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
  
  constructor(private servicosCursos: CursoService ){ 
    //this.servicosCursos = new CursoService();
    this.cursos$ =   this.servicosCursos.listaUsuarios();
  }

}
