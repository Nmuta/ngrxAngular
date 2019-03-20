import { Action } from '@ngrx/store';

const ADD_GEM:string = "ADD"; 
const EDIT_GEM:string = "EDIT"; 

export class addGem implements Action{
  readonly type = ADD_GEM; 
  constructor(public payload:string){}
}

export class editGem implements Action{
    readonly type = EDIT_GEM; 
    payload:number = 4;
  }

export type gemActions = addGem; 