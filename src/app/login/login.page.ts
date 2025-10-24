import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Importar esto
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true, // ✅ importante en Angular standalone
  imports: [IonicModule, CommonModule, FormsModule, RouterModule], // ✅ FormsModule aquí
})
export class LoginPage {
  // ✅ Definición del objeto user
  user = {
    username: '',
    password: '',
  };

  constructor() {}

  // ✅ Método que se llama desde el formulario
  onLogin() {
    if (this.user.username.trim() && this.user.password.trim()) {
      alert(`Bienvenida, ${this.user.username}! 😄`);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
