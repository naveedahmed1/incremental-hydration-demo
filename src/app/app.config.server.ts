import { ApplicationConfig, mergeApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app.config';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withIncrementalHydration()),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
