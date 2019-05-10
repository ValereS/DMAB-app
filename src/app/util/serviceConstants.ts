import { HttpHeaders } from "@angular/common/http";

export const ZERO = '0';
export const DEFAULT_REQUEST_HEADERS = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
export const GOUV_WS_TOWN_SEARCH_BY_NAME_URL = 'https://geo.api.gouv.fr/communes?nom=';
