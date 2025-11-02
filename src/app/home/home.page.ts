// src/app/home/home.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

// Angular Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  animations: [
    trigger('slideInput', [
      state('start', style({ transform: 'translateX(0)' })),
      state('end', style({ transform: 'translateX(0)' })),
      transition('start => end', [
        animate('1s ease', style({ transform: 'translateX(50px)' }))
      ])
    ])
  ]
})
export class HomePage {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivel: string = '';
  fechaNacimiento: any;

  animarNombre: boolean = false;
  animarApellido: boolean = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.username = nav.extras.state['username'];
    }
  }

  limpiarCampos() {
    this.animarNombre = true;
    this.animarApellido = true;

    setTimeout(() => {
      this.animarNombre = false;
      this.animarApellido = false;
    }, 1000); // duración 1 segundo

    this.nombre = '';
    this.apellido = '';
    this.nivel = '';
    this.fechaNacimiento = '';
  }

  mostrarDatos() {
    alert(`Usuario: ${this.username}\nNombre: ${this.nombre}\nApellido: ${this.apellido}`);
  }
}
