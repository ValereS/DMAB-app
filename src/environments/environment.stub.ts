import { LogLevel } from "../app/shared/enum/LogLevel.enum";
import { GOUV_WS_TOWN_SEARCH_BY_NAME_URL } from "../app/util/serviceConstants";

const mainStubUrl = 'assets/stub/json';

export const environment = {
  production: false,

  urlAllAdherent: mainStubUrl + '/adherent.json',
  urlCreateAdherent: 'http://fakeLocation',
  urlTownByCP: GOUV_WS_TOWN_SEARCH_BY_NAME_URL,

  angularLogLevel: LogLevel.ALL
};
