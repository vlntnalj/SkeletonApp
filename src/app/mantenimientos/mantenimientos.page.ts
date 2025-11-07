import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.page.html',
  styleUrls: ['./mantenimientos.page.scss'],
})
export class MantenimientosPage {
  mantenimientoForm: FormGroup;
  mantenimientos: any[] = [];

  constructor(private fb: FormBuilder) {
    this.mantenimientoForm = this.fb.group({
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      responsable: ['', Validators.required]
    });
  }

  guardar() {
    if (this.mantenimientoForm.valid) {
      this.mantenimientos.push(this.mantenimientoForm.value);
      alert('Mantenimiento guardado correctamente.');
      this.mantenimientoForm.reset();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  limpiar() {
    this.mantenimientoForm.reset();
  }
}
