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
    // the names below, gem_list and name_of_state, tie into unique identifiers in app.module.ts,  
    this.stuff = this.store.select('gemReducer'); // these names tie into store se
  }

}
