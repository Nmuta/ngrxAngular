import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-denver',
  templateUrl: './denver.component.html',
  styleUrls: ['./denver.component.scss']
})
export class DenverComponent implements OnInit {

  constructor(private store: Store<{statename:string, gemCollection:string[]}>) { }
  gems:Observable<string[]>; 
  statename:Observable<string>; 
  city:string = "Denver"; 


  ngOnInit() {
      
    this.stuff = this.store.select('mainStore'); // the selector 'mainStore' is defined in app.module.ts
  }

}
