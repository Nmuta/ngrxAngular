import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import * as gemActions from '../actions/gemActions'; 
import { getParentInjectorIndex } from '@angular/core/src/render3/util';
import { EditedItem } from '../editedItem.model';  

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

  editGem(index:number){
    let targetText = <HTMLInputElement>(document.getElementById("gem"+index));
    let val:string = targetText ? targetText.value : "";

    let bundle:EditedItem = new EditedItem(index,val);
    this.store.dispatch(new gemActions.editGem(bundle));
  }

  deleteGem(i:number){
    this.store.dispatch(new gemActions.deleteGem(i));
  }

}
