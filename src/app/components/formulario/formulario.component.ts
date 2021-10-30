import { VillanoService } from './../../services/villano.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public form: FormGroup;

  constructor(private villanoService: VillanoService) { 
    this.form = new FormGroup({
      villano: new FormControl(),
      pelicula: new FormControl(),
      color: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.villanoService.addVillano(this.form.value);
    this.form.reset();
  };
}
