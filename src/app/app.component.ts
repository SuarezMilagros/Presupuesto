import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { ListarGastoComponent } from './components/gastos/listar-gasto/listar-gasto.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GastosComponent, IngresarPresupuestoComponent, ListarGastoComponent,IngresarGastoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'presupuesto';
}
