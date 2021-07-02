import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {
  private url: number;
  private full: string;
  constructor(private httpClient: HttpClient) { }
  //getcomments(): Observable<any>{
    //return this.httpClient.get('https://api.postalpincode.in/pincode/110001');
  //}
    geturl(value: number) {
      this.url = value;
  }
    getadd(): Observable<any>{
      console.log('https://api.postalpincode.in/pincode/' + this.url);
      this.full =  'https://api.postalpincode.in/pincode/'+ this.url;
      return this.httpClient.get(this.full);
  }
  }



