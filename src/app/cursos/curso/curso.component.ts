import { Component } from '@angular/core';
import { Curso } from '../../curso/objetos/curso';
import {MatTableModule} from '@angular/material/table'; 

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent {
  
  displayedColumns: string[] = ['nome', 'curso'];
  cursos: Curso[] = [
    {id:'1', nome:'Bruno', categoria:'Eng. Mecanica'}
  ];

}
