/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Component,OnInit, PipeTransform} from '@angular/core';
import { Comments } from './comments';
import { FreeapiService } from './freeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lstcomments: Comments[];
  currentVal: number;
  value: string;
  url: any;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private _FreeapiService: FreeapiService) {}
  getVal(event)
  {
    console.log(event.target.value);
    this.currentVal=event.target.value;
  }
  getadd1(currentVal){
  console.log('https://api.postalpincode.in/pincode/'+ currentVal);
  this.value = 'https://api.postalpincode.in/pincode/' + currentVal;
  console.log(this.value);}
  //eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){}
    // eslint-disable-next-line no-underscore-dangle
    // eslint-disable-next-line no-underscore-dangle
    submit(){
    this._FreeapiService.geturl(this.url);
    this._FreeapiService.getadd().subscribe(
      data=>
      {this.lstcomments = data;
      console.log(data);}
    );
 } }





