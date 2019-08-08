import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

info: InfoPagina = {};
cargada = false;
equipo:any[] = [];

  constructor( private http:HttpClient) { 
    console.log('Servicio de info pagina listo');
    this.cargarInfo();
    this.cargarEquipo();
  }  
  private cargarInfo() {
      //leer el archivo JSON
      this.http.get('assets/data/data-pagina.json')
      .subscribe( resp => {
        this.cargada = true;
        this.info = resp;
        //console.log(resp);
         });  
  }
  private cargarEquipo(){
    //los datos de Firebase 
    this.http.get('https://angular-html-c2b35.firebaseio.com/equipo.json')
    .subscribe((resp:any[]) => {
      this.equipo = resp;
      console.log(resp);
    })
  }
}
