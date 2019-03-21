import { Action } from '@ngrx/store';
import { EditedItem } from '../editedItem.model';  

const ADD_GEM:string = "ADD"; 
const EDIT_GEM:string = "EDIT"; 
const DELETE_GEM:string = "DELETE"; 

export class addGem implements Action{
  readonly type = ADD_GEM; 
  constructor(public payload:string){}
}

export class editGem implements Action{
    readonly type = EDIT_GEM; 
    constructor(public payload:EditedItem){}
  }

export class deleteGem implements Action{
    readonly type = DELETE_GEM; 
    constructor(public payload:number){}
  }

export type gemActions =  addGem | editGem | deleteGem ;