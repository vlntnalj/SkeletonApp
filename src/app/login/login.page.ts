import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router, private alertCtrl: AlertController) {}

  async ingresar() {
    const usuarioValido = /^[a-zA-Z0-9]{3,8}$/.test(this.usuario);
    const passwordValida = /^[0-9]{4}$/.test(this.password);

    if (!usuarioValido || !passwordValida) {
      const alerta = await this.alertCtrl.create({
        header: 'Datos inválidos',
        message:
          'El usuario debe tener entre 3 y 8 caracteres alfanuméricos y la contraseña debe ser numérica de 4 dígitos.',
        buttons: ['OK'],
      });
      await alerta.present();
      return;
    }

    // Si es válido, redirige al Home con el usuario
    this.router.navigate(['/home'], { state: { usuario: this.usuario } });
  }
}
