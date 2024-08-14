import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastosComponent } from '../gastos.component';
import { ListarGastoComponent } from '../listar-gasto/listar-gasto.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  standalone: true,
  imports: [CommonModule,GastosComponent,ListarGastoComponent,FormsModule],
  templateUrl: './ingresar-gasto.component.html',
  styleUrl: './ingresar-gasto.component.css'
})
export class IngresarGastoComponent {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textoIncorrecto: string;

  constructor(private router: Router, private _presupuestoService: PresupuestoService) {
    this.nombreGasto='';
    this.cantidad= 0;
    this.formularioIncorrecto= false;
    this.textoIncorrecto = 'Nombre gasto o cantidad incorrecta';
   }

  ngOnInit(): void {
  }

  agregarGasto(){
    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;

    }
   


    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
    } else {


      //creamos el objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }



      //enviamos el objeto a los suscriptores via subjet
      this._presupuestoService.agregarGasto(GASTO)



      // reseteamos formulario



      this.formularioIncorrecto=false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }

  }
}
