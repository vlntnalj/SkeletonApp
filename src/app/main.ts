import { provideLottieOptions } from 'ngx-lottie';

bootstrapApplication(AppComponent, {
  providers: [
    provideLottieOptions({
      player: () => import('lottie-web')
    })
  ]
});
