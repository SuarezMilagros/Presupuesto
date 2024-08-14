import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';


@Component({
  selector: 'app-ingresar-presupuesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrl: './ingresar-presupuesto.component.css'
})
export class IngresarPresupuestoComponent {
  cantidad:number
  cantidadIncorrecta:boolean
  
  constructor(private router: Router, private _presupuestoService: PresupuestoService) {
    this.cantidad = 0;
    this.cantidadIncorrecta = false;

   }

  ngOnInit(): void {
  }

  agregar() {

    if(this.cantidad > 0) {
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this.router.navigate(['/gastos'])


    } else {
      this.cantidadIncorrecta = true;
    }
  }

}
