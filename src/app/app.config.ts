import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withIncrementalHydration()),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
