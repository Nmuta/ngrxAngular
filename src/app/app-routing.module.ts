import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DenverComponent } from './denver/denver.component'; 
import { BoulderComponent } from './boulder/boulder.component';

const routes: Routes = [
  {path: "denver", component: DenverComponent},
  {path: "boulder", component: BoulderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
