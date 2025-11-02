import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private alertCtrl: AlertController) {}

  async onAgregar() {
    // validaciones finales (extra por si el navegador no aplica alguna)
    const userOk = /^[a-zA-Z0-9]{3,8}$/.test(this.credentials.username);
    const passOk = /^[0-9]{4}$/.test(this.credentials.password);

    if (!userOk || !passOk) {
      const a = await this.alertCtrl.create({
        header: 'Validación',
        message: 'Revise el usuario y la contraseña. Usuario: 3-8 caracteres alfanuméricos. Contraseña: 4 dígitos.',
        buttons: ['OK']
      });
      await a.present();
      return;
    }

  
    this.router.navigate(['/home'], { state: { username: this.credentials.username } });
  }
}
