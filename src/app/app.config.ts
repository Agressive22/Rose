import { ApplicationConfig, provideZoneChangeDetection , } from '@angular/core';
import { provideRouter} from '@angular/router';
import { withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './core/interceptor/interceptor.interceptor';

import { routes } from './app.routes';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),  provideHttpClient(
    withInterceptors([
      loadingInterceptor
    ])
  )]
}
