import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async login(usuario: string, password: string): Promise<boolean> {
    if (usuario === 'admin' && password === '1234') {
      await this.storage.set('sesion', true);
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  async logout() {
    await this.storage.remove('sesion');
    this.isLoggedIn = false;
  }

  async estaAutenticado(): Promise<boolean> {
    const sesion = await this.storage.get('sesion');
    return sesion === true;
  }
}
