import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';

import * as BookEffects from './ngrx/book/effects';
import {provideStore} from '@ngrx/store';
import {bookReducer} from './ngrx/book/reducers';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({book: bookReducer}),
    provideRouter(routes),
    provideHttpClient(), provideEffects(BookEffects), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
};
