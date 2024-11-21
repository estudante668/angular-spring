import { Injectable } from '@angular/core';
import { Curso } from '../curso/objetos/curso';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { tap } from 'node:test/reporters';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = '/assets/objeto.json'
 
  constructor(private http: HttpClient) { }

  listaUsuarios(){
    return this.http.get<Curso[]>(this.API);
  }
}
