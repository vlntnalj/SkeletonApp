import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  username = 'Administrador';
  totalUnidades = 40;
  unidadesOcupadas = 34;
  pagosPendientes = 6;
  reportesAbiertos = 3;

  actividadReciente = [
    { titulo: 'Pago recibido de Dpto 203', fecha: '08/11/2025' },
    { titulo: 'Nuevo reporte de filtración', fecha: '07/11/2025' },
  ];

  proximasTareas = [
    { descripcion: 'Revisión ascensor', fecha: '09/11/2025' },
    { descripcion: 'Limpieza de cisterna', fecha: '11/11/2025' },
  ];

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate(['/' + path]);
  }
}
