import { Component } from '@angular/core';
import { IonicModule, IonInput, IonButton, IonItem, IonLabel, IonText } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]], // 4 dígitos
    });
  }

  login() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value.username;
      // Navegar al Home y pasar el usuario
      this.router.navigate(['/home'], { state: { user } });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
