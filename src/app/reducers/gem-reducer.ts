import { Store, State } from '@ngrx/store'; 
import * as gemActions from '../actions/gemActions'; 

 const initialState = {
    stateName: "Colorado",
    gemCollection: ["Amyethyst", "Garnet", "Agate", "Ruby"]
}

export function gemReducer(state=initialState, action: gemActions.gemActions){
    switch(action.type){
        case "ADD": 
        return {
            ...state,
            gemCollection: [...state.gemCollection, action.payload]
        }
        case "EDIT":
        return{
            ...state
        }

        case "DELETE":
        return{
            ...state,
            gemCollection:  state.gemCollection.filter((x:string,i:number) => i!==action.payload)
        }
      
        default:
          return {
              ...state
          }
    }
    return state;
}