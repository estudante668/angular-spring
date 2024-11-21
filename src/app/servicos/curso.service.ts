import { Injectable } from '@angular/core';
import { Curso } from '../curso/objetos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursos: Curso[] = [
    {id:'1', nome:'Marcio', categoria: 'Veterinaria'},
    {id:'2', nome:'Julia', categoria: 'Eng.Quimica'},
    {id:'3', nome:'Carla', categoria: 'Farmacia'},
  ];
  constructor() { }

  listaUsuarios(): Curso[]{
    return this.cursos;
  }
}
