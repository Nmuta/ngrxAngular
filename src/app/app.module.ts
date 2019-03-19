import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DenverComponent } from './denver/denver.component';
import { BoulderComponent } from './boulder/boulder.component';
import { NavComponent } from './nav/nav.component';
import { StoreModule } from '@ngrx/store'; 
import { gemReducer } from './reducers/gem-reducer';

@NgModule({
  declarations: [
    AppComponent,
    DenverComponent,
    BoulderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    StoreModule.forRoot({gemReducer: gemReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
