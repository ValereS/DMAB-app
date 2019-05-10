import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { DEFAULT_REQUEST_HEADERS } from '../../util/serviceConstants';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { LoggerService } from '../logger/logger.service';
import { TownWS } from './town-ws';

@Injectable({
  providedIn: 'root'
})
export class TownService {

  constructor(private http: HttpClient, private logger: LoggerService) { }

  getTownWithCP(townName: string): Observable<TownWS[]> {
    return this.http.get<TownWS[]>(environment.urlTownByCP + townName, {headers: DEFAULT_REQUEST_HEADERS})
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.logger.error('An error occurred:', error.error.message);
    } else {
      this.logger.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
