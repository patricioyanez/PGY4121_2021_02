import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
// permite enviar/mandar a otra pagina
import { Router } from '@angular/router';
@Component({
  selector: 'app-playas',
  templateUrl: './playas.page.html',
  styleUrls: ['./playas.page.scss'],
})
export class PlayasPage implements OnInit {
  playas = []
  constructor(private lugaresService: LugaresService,
              private router : Router
    ) { }

  ngOnInit() {
    // traspasar los datos del servicio al atributo
    this.playas = this.lugaresService.getPlayas();
  }
  agregar()
  {
    this.router.navigate(['/agregar'])
  }
}
