import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://mi-api.com';

  getPagos() {
    return axios.get(`${this.url}/pagos`);
  }

  getResidentes() {
    return axios.get(`${this.url}/residentes`);
  }
}
