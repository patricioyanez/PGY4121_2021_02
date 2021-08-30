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
  promediar(nota1: HTMLInputElement,
            nota2: HTMLInputElement,
            nota3: HTMLInputElement,
            pon1: HTMLInputElement,
            pon2: HTMLInputElement,
            pon3: HTMLInputElement)
  {
    //this.aux = Number(nota1.value) + Number(nota2.value) + Number(nota3.value);
    //this.promedio = this.aux / 3;
    let n1 = Number(nota1.value) * Number(pon1.value) / 100;
    let n2 = Number(nota2.value) * Number(pon2.value) / 100;
    let n3 = Number(nota3.value) * Number(pon3.value) / 100;

    this.promedio = n1 + n2 + n3;

  }
}
