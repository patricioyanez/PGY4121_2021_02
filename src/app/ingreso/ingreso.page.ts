import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  promedio : number;
  aux : number;
  constructor() { }

  ngOnInit() {
  }
  promediar(nota1: HTMLInputElement,nota2: HTMLInputElement,nota3: HTMLInputElement)
  {
    this.aux = Number(nota1.value) + Number(nota2.value) + Number(nota3.value);
    this.promedio = this.aux / 3;
  }
}
