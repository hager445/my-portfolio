
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgxParticlesComponent } from '@tsparticles/angular';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ الصحيح

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), NgxParticlesComponent, provideAnimations()],

};
