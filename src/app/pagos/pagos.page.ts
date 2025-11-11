import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  
  departamentosPagados = 8;
  departamentosPendientes = 3;
  departamentosVencidos = 2;

  pagos = [
    { departamento: 101, residente: 'María López', fecha: '01/11/2025', monto: 55000, estado: 'Pagado', estadoColor: 'success' },
    { departamento: 204, residente: 'Carlos Díaz', fecha: '03/11/2025', monto: 60000, estado: 'Pendiente', estadoColor: 'warning' },
    { departamento: 305, residente: 'Ana Torres', fecha: '05/11/2025', monto: 58000, estado: 'Vencido', estadoColor: 'danger' },
  ];

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    setTimeout(() => {
      this.animarTitulo();
      this.animarTarjetas();
      this.animarBotones();
      this.animarLista();
    }, 300);
  }

  animarTitulo() {
    const titulo = document.querySelector('ion-title');
    if (titulo) {
      this.animationCtrl.create()
        .addElement(titulo)
        .duration(1000)
        .iterations(1)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(-20px)', 'translateY(0)')
        .easing('ease-out')
        .play();
    }
  }

  animarTarjetas() {
    const tarjetas = document.querySelectorAll('ion-card');
    tarjetas.forEach((card, i) => {
      this.animationCtrl.create()
        .addElement(card)
        .duration(800)
        .delay(i * 200)
        .fromTo('transform', 'translateY(50px)', 'translateY(0)')
        .fromTo('opacity', '0', '1')
        .easing('ease-out')
        .play();
    });
  }


  animarBotones() {
    const chips = document.querySelectorAll('ion-chip');
    chips.forEach((chip) => {
      this.animationCtrl.create()
        .addElement(chip)
        .duration(800)
        .iterations(Infinity)
        .direction('alternate')
        .fromTo('transform', 'scale(1)', 'scale(1.05)')
        .easing('ease-in-out')
        .play();
    });
  }

  animarLista() {
    const items = document.querySelectorAll('ion-item');
    items.forEach((item, i) => {
      this.animationCtrl.create()
        .addElement(item)
        .duration(700)
        .delay(i * 120)
        .fromTo('transform', 'translateX(-40px)', 'translateX(0)')
        .fromTo('opacity', '0', '1')
        .easing('ease-out')
        .play();
    });
  }
}
