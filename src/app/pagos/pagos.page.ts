import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, DecimalPipe } from '@angular/common';

import {
  LottieComponent,
  provideLottieOptions
} from 'ngx-lottie';

@Component({
  selector: 'app-pagos',
  standalone: true,
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    DecimalPipe,
    LottieComponent
  ],
  providers: [
    provideLottieOptions({
      player: () => import('lottie-web')   // 👈 ESTO ES OBLIGATORIO
    })
  ]
})
export class PagosPage {

  departamentosPagados = 12;
  departamentosPendientes = 8;
  departamentosVencidos = 3;

  pagos = [
    {
      departamento: '202',
      residente: 'Juan Pérez',
      fecha: '10/11/2025',
      monto: 45000,
      estado: 'Pagado',
      estadoColor: 'success'
    },
    {
      departamento: '305',
      residente: 'María López',
      fecha: '08/11/2025',
      monto: 42000,
      estado: 'Pendiente',
      estadoColor: 'warning'
    },
    {
      departamento: '110',
      residente: 'Carlos Díaz',
      fecha: '05/11/2025',
      monto: 40000,
      estado: 'Vencido',
      estadoColor: 'danger'
    }
  ];

  lottieOptions = {
    path: '/assets/animations/pagos.json'
  };

  constructor() {}
}
