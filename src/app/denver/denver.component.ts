import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import * as gemActions from '../actions/gemActions'; 
import { getParentInjectorIndex } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-denver',
  templateUrl: './denver.component.html',
  styleUrls: ['./denver.component.scss']
})
export class DenverComponent implements OnInit {

  @ViewChild('newGem') newGem:ElementRef;

  constructor(private store: Store<{statename:string, gemCollection:string[]}>) { }
  stuff:Observable<string[]>; 
  statename:Observable<string>; 
  city:string = "Denver"; 

  thing:string = "hello"; 

  ngOnInit() {
    this.stuff = this.store.select('mainStore'); // the selector 'mainStore' is defined in app.module.ts
  }

  addGem(){
    const userInput:string = this.newGem.nativeElement.value;
    this.store.dispatch(new gemActions.addGem(userInput));
  }

  editGem(i:number){
    alert("editing"+i); 
  }

  deleteGem(i:number){
    this.store.dispatch(new gemActions.deleteGem(i));
  }

}
