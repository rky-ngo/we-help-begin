import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DonateInfoApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonateInfoApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DonateInfoApiProvider Provider');
  }

}
