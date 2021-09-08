import { Component, OnInit } from '@angular/core';
// se debe importar el servicio para utilizarlo
import { LugaresService }from '../lugares.service';
// permite enviar al usuario a otra pagina 
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(private lugaresService : LugaresService,
              private router : Router
  ) { }

  ngOnInit() {
  }
  guardar(nombre: HTMLInputElement , 
          url: HTMLInputElement , 
          comentario: HTMLInputElement )
  {
    const nom = nombre.value;
    const img = url.value;
    const com = comentario.value;

    this.lugaresService.addPlaya(nom, img, com);
    this.router.navigate(['/playas']);


  }
}
