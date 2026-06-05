import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter} from '@angular/router';
import { withRouterConfig, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled' // Restaura el scroll arriba al cambiar de página
      }),
      // 2. Configuración para permitir recargar la misma URL
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      })
    ),
  ]
};
