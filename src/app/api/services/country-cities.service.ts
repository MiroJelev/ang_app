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
import { countryCitiesRetrieve } from '../fn/country-cities/country-cities-retrieve';
import { CountryCitiesRetrieve$Params } from '../fn/country-cities/country-cities-retrieve';

@Injectable({ providedIn: 'root' })
export class CountryCitiesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `countryCitiesRetrieve()` */
  static readonly CountryCitiesRetrievePath = '/country_cities/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countryCitiesRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  countryCitiesRetrieve$Response(params?: CountryCitiesRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Country>> {
    return countryCitiesRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countryCitiesRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countryCitiesRetrieve(params?: CountryCitiesRetrieve$Params, context?: HttpContext): Observable<Country> {
    return this.countryCitiesRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Country>): Country => r.body)
    );
  }

}
