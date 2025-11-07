import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.page.html',
  styleUrls: ['./trabajadores.page.scss'],
})
export class TrabajadoresPage {
  trabajadorForm: FormGroup;
  trabajadores: any[] = [];

  constructor(private fb: FormBuilder) {
    this.trabajadorForm = this.fb.group({
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  guardar() {
    if (this.trabajadorForm.valid) {
      this.trabajadores.push(this.trabajadorForm.value);
      alert('Trabajador guardado correctamente.');
      this.trabajadorForm.reset();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  limpiar() {
    this.trabajadorForm.reset();
  }
}

