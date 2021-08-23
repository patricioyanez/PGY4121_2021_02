import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {
  //atributos  // ts = typeScript
  nombre  : string;
  edad    : number;
  lista   : [];
  listado : [
    {
      id      : '1',
      nombre  : 'Juan',
      apellido: 'Perez'
    },
    {
      id      : '2',
      nombre  : 'Juana',
      apellido: 'Arce'
    },
    {
      id      : '3',
      nombre  : 'Ana',
      apellido: 'Diaz'
    }
  ]

  constructor() {
    this.nombre = "Alexander";
    this.edad = 15;
  }

  ngOnInit() {
  }
  // métodos o eventos

}
