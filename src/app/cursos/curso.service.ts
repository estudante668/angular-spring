import { Injectable } from '@angular/core';
import { Curso } from '../curso/objetos/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = '/assets/objeto.json'
  cursos: Curso[] = [];
  
  constructor( private http: HttpClient) { }

  listaUsuarios(){
    return this.http.get<Curso[]>(this.API)
  }
}
