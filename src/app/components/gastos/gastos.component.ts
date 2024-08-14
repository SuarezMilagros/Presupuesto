import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';
import { CommonModule } from '@angular/common';
import { IngresarGastoComponent } from './ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './listar-gasto/listar-gasto.component';


@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [CommonModule,IngresarGastoComponent, ListarGastoComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {

  constructor(private router: Router, private _presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    if(this._presupuestoService.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto']);
    }


  }

}
