import { VillanoService } from './../../services/villano.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  public numVillanos: number = 0;

  constructor(private villanoService: VillanoService) { }

  ngOnInit(): void {
    this.villanoService.getVillanos().subscribe(villanos => {
      this.numVillanos = villanos.length;
    });
  }

}
