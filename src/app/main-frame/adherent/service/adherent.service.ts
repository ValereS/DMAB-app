import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoggerService } from '../../../core/logger/logger.service';
import { environment } from '../../../../environments/environment';
import { Adherent } from '../../../shared/dto/adherent';
import { DEFAULT_REQUEST_HEADERS } from '../../../util/serviceConstants';
import { ServerResult } from '../../../shared/interface/server-result';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  constructor(private http: HttpClient, private logger: LoggerService) {}

  getAdherents(): Observable<Adherent[]> {
    return this.http
      .get<Adherent[]>(environment.urlAllAdherent, { headers: DEFAULT_REQUEST_HEADERS })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  storeAdherent(adherent: any): Observable<ServerResult> {
    const body = adherent;
    this.logger.info(body);
    // this.logger.info(JSON.parse(body));
    return this.http
    .post<ServerResult>(environment.urlCreateAdherent, body, {headers: DEFAULT_REQUEST_HEADERS})
    .pipe(
      retry(1),
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
