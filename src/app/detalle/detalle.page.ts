import { Component, OnInit } from '@angular/core';
// permite capturar el id
import { ActivatedRoute, Router } from '@angular/router';
// importar modelo
import { Lugar } from '../lugar.model';
 //importar el servicio
import { LugaresService } from '../lugares.service';
 // permite crear los alert
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  playa : Lugar;
  constructor(
    private activatedRouter: ActivatedRoute,
    private lugaresService : LugaresService,
    private router: Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
    // captura el parametro id (definido en el app-routing)
    this.activatedRouter.paramMap.subscribe(paramMap =>
      {
        const id = Number(paramMap.get('id')) // convertir a number pq es string
        this.playa = this.lugaresService.getPlaya(id); // llamada al servicio para obtener playa
      })
  }

  async eliminar()
  {
    const alerta = await this.alertController.create({
      header      : "¿Está seguro de eliminar el elemento?",
      message     : "Favor confirmar",
      buttons     : [
        {
          text    : "No",
          role    : "cancel"
        },
        {
          text    : "Si",
          handler : () => {
            this.lugaresService.deletePlaya(this.playa.id);
            this.router.navigateByUrl("/playas");
          }
        }
      ]
    })
    await alerta.present();
  }

}
