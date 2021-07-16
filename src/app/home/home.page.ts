/* eslint-disable no-underscore-dangle */
import { Component,OnInit, PipeTransform } from '@angular/core';
import { FreeapiService } from '../freeapi.service';
import { Comments,content } from '../comments';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {// eslint-disable-next-line @typescript-eslint/naming-convention
  lstcomments: Comments[];
  lst: Comments;
  currentVal: number;
  value: string;
  url: any;

  // eslint-disable-next-line @typescript-eslint/naming-convention

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private _FreeapiService: FreeapiService) {}
  //eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){}
    // eslint-disable-next-line no-underscore-dangle
    // eslint-disable-next-line no-underscore-dangle
    //getVal(event)
  //{
   // console.log(event.target.value);
  //}
    pin(event: any){
      this.url = event.target.value;
    // eslint-disable-next-line eqeqeq
    if(event.target.value.length !==6){
      this.currentVal=event.target.value;
      alert('pincode must be a 6-digit code');
    };
    // eslint-disable-next-line eqeqeq
    if( event.target.value!== '^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$' && event.target.value==999999)
    {
      alert('enter proper pin code');
    };
  }
    commit(){
    this._FreeapiService.geturl(this.url);
    this._FreeapiService.getadd().subscribe(
      data=>
      {this.lstcomments = data;
        this.lst = data;
      console.log(data);
      // eslint-disable-next-line eqeqeq
      if(this.lst.Status=='Error'){
       console.log('NO RECORDS TO MATCH');
      }
    }
    );
      }}
