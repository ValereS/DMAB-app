import { LogLevel } from "../app/shared/enum/LogLevel.enum";
import { GOUV_WS_TOWN_SEARCH_BY_NAME_URL } from "../app/util/serviceConstants";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const integrationApiUrl = '';

export const environment = {
  production: false,

  urlAllAdherent: integrationApiUrl + 'adherent/s',
  urlCreateAdherent: integrationApiUrl + 'adherent/c',
  urlTownByCP: GOUV_WS_TOWN_SEARCH_BY_NAME_URL,

  angularLogLevel: LogLevel.ALL
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
