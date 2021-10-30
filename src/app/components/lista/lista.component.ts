import { VillanoService } from './../../services/villano.service';
import { Component, OnInit } from '@angular/core';
import { Villano } from 'src/app/Models/Villano';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public villanos: Villano[] = [];

  constructor(private villanoService: VillanoService) { }

  ngOnInit(): void {
    this.villanoService.getVillanos().subscribe(villanos => {
      this.villanos = villanos;
    });
  }
}
