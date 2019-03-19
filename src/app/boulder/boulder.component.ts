import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-boulder',
  templateUrl: './boulder.component.html',
  styleUrls: ['./boulder.component.scss']
})
export class BoulderComponent implements OnInit {

  stuff:Observable<string[]>;
  city:string = "Boulder"; 

  constructor(private store:Store<{}>) { }

  ngOnInit() {
    this.stuff = this.store.select("mainStore"); // the selector 'mainStore' is defined in app.module.ts
  }

}
