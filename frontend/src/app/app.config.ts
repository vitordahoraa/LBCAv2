import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { UserService } from './shared/services/user/user.service';
import { HttpClientModule,HttpClient,provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),[BrowserModule,HttpClientModule,HttpClient],UserService,provideHttpClient(withFetch())]
};
