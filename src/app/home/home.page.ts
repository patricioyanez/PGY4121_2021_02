import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 //atributos
  nombre: string;
  constructor() {
    this.nombre = "Juan";
  }


  // metodos  --> acciones
}
