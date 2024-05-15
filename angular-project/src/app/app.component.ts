import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import{DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataService = inject(DataService);

  datosApiGot: any[] = [];

  obtenerDatosGot(){
    this.dataService.obtenerDatos().subscribe((respuesta:any)=>{
      if (respuesta) {
        this.datosApiGot = respuesta;
      } else {
      }
      
    });
  }

  ngOnInit(){
    this.obtenerDatosGot();
  }
}