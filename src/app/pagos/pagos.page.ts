import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonGrid, IonRow, IonCol, IonList, IonItem, IonLabel, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonChip, IonGrid, IonRow, IonCol, IonList, IonItem, IonLabel, IonBadge
  ]
})
export class PagosPage {

  // Datos del resumen
  departamentosPagados = 25;
  departamentosPendientes = 8;
  departamentosVencidos = 3;

  // Lista de ejemplos de pagos
  pagos = [
    { departamento: 101, residente: 'Laura Pérez', fecha: '2025-11-01', monto: 85000, estado: 'Pagado', estadoColor: 'success' },
    { departamento: 203, residente: 'Carlos Soto', fecha: '2025-11-03', monto: 87000, estado: 'Pendiente', estadoColor: 'warning' },
    { departamento: 307, residente: 'Andrea Mella', fecha: '2025-10-28', monto: 90000, estado: 'Vencido', estadoColor: 'danger' },
    { departamento: 402, residente: 'Luis Rojas', fecha: '2025-11-02', monto: 86000, estado: 'Pagado', estadoColor: 'success' },
    { departamento: 509, residente: 'María Gutiérrez', fecha: '2025-11-04', monto: 91000, estado: 'Pendiente', estadoColor: 'warning' },
  ];
}
