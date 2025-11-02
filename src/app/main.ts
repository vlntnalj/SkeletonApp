import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

bootstrapApplication(LoginPage, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
import { LoginPage } from './login/login.page';
