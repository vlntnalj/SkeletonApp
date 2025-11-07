import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.page.html',
  styleUrls: ['./departamentos.page.scss'],
})
export class DepartamentosPage {
  departamentoForm: FormGroup;
  departamentos: any[] = [];

  constructor(private fb: FormBuilder) {
    this.departamentoForm = this.fb.group({
      numero: ['', Validators.required],
      propietario: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  guardar() {
    if (this.departamentoForm.valid) {
      this.departamentos.push(this.departamentoForm.value);
      alert('Departamento guardado correctamente.');
      this.departamentoForm.reset();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  limpiar() {
    this.departamentoForm.reset();
  }
}

