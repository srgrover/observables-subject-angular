import { Villano } from './../Models/Villano';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillanoService {

  private villanos: Villano[];
  private villanos$: Subject<Villano[]>;

  constructor() { 
    this.villanos = [];
    this.villanos$ = new Subject();
  }

  addVillano(villano: Villano){
    this.villanos.push(villano);
    this.villanos$.next(this.villanos);
  }

  getVillanos(): Observable<Villano[]>{
    return this.villanos$.asObservable();
  }
}