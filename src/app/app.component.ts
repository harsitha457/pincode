import { Component,OnInit} from '@angular/core';
import { Comments } from './comments';
import { FreeapiService } from './freeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lstcomments: Comments[];

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private _FreeapiService: FreeapiService) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){
    // eslint-disable-next-line no-underscore-dangle
    this._FreeapiService.getcomments().subscribe(
      data=>
      {this.lstcomments = data;
      console.log(data);}
    );
    }
  }

