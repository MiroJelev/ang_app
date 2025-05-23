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

import { policyRetrieve } from '../fn/policy/policy-retrieve';
import { PolicyRetrieve$Params } from '../fn/policy/policy-retrieve';
import { Politics } from '../models/politics';

@Injectable({ providedIn: 'root' })
export class PolicyService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `policyRetrieve()` */
  static readonly PolicyRetrievePath = '/policy/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `policyRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  policyRetrieve$Response(params?: PolicyRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Politics>> {
    return policyRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `policyRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  policyRetrieve(params?: PolicyRetrieve$Params, context?: HttpContext): Observable<Politics> {
    return this.policyRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Politics>): Politics => r.body)
    );
  }

}
