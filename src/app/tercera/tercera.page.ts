import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercera',
  templateUrl: './tercera.page.html',
  styleUrls: ['./tercera.page.scss'],
})
export class TerceraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    console.log("Ud me clickeo");
  }

}
