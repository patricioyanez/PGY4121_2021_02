import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
@Component({
  selector: 'app-playas',
  templateUrl: './playas.page.html',
  styleUrls: ['./playas.page.scss'],
})
export class PlayasPage implements OnInit {
  playas = []
  constructor(private lugaresService: LugaresService) { }

  ngOnInit() {
    // traspasar los datos del servicio al atributo
    this.playas = this.lugaresService.getPlayas()
  }

}
