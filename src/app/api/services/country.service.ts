/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Country } from '../models/country';
import { countryRetrieve } from '../fn/country/country-retrieve';
import { CountryRetrieve$Params } from '../fn/country/country-retrieve';

@Injectable({ providedIn: 'root' })
export class CountryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `countryRetrieve()` */
  static readonly CountryRetrievePath = '/country/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countryRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  countryRetrieve$Response(params?: CountryRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Country>> {
    return countryRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countryRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countryRetrieve(params?: CountryRetrieve$Params, context?: HttpContext): Observable<Country> {
    return this.countryRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Country>): Country => r.body)
    );
  }

}
