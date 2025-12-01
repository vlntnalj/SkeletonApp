import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate: CanActivateFn = async () => {
    const estado = await this.authService.estaAutenticado();
    if (!estado) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
