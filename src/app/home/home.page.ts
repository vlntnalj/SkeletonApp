import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  username: string | null = null;

  model = {
    nombre: '',
    apellido: '',
    educacion: '',
    fechaNacimiento: ''
  };

  // Referencias a inputs para animarlos
  @ViewChild('nombreInput', { read: ElementRef }) nombreEl?: ElementRef;
  @ViewChild('apellidoInput', { read: ElementRef }) apellidoEl?: ElementRef;

  constructor(private router: Router, private alertCtrl: AlertController) {
    // Leer estado enviado desde Login
    const nav = this.router.getCurrentNavigation();
    if (nav && nav.extras && (nav.extras as any).state) {
      this.username = (nav.extras as any).state['username'] ?? null;
    } else {
      // alternativa: usar history.state si recarga la página
      const st = (history && history.state) ? (history.state as any) : null;
      if (st && st.username) this.username = st.username;
    }
  }

  // Limpiar campos y lanzar animación L -> R (1s) sobre nombre y apellido
  onLimpiar() {
    this.model.nombre = '';
    this.model.apellido = '';
    this.model.educacion = '';
    this.model.fechaNacimiento = '';

    // Animación simple con Web Animations API (una iteración, 1s)
    const animOptions = { duration: 1000, iterations: 1, easing: 'ease-out' };

    const keyframes = [
      { transform: 'translateX(-20px)', offset: 0 },
      { transform: 'translateX(0)', offset: 1 }
    ];

    if (this.nombreEl?.nativeElement) {
      // animar el contenedor del ion-input
      this.nombreEl.nativeElement.animate(keyframes, animOptions);
    }
    if (this.apellidoEl?.nativeElement) {
      this.apellidoEl.nativeElement.animate(keyframes, animOptions);
    }
  }

  async onMostrar() {
    const nombre = this.model.nombre || '(sin nombre)';
    const apellido = this.model.apellido || '(sin apellido)';

    const a = await this.alertCtrl.create({
      header: 'Información',
      message: `Nombre: ${nombre}<br>Apellido: ${apellido}`,
      buttons: ['OK'],
    });
    await a.present();
  }
}
