import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenTableComponent} from './gen-table/gen-table.component';
import {OmidologyComponent} from './omidology/omidology.component';
import {InputFormComponent} from "./Forms/input-form/input-form.component";
import {EastereggComponent} from "./easteregg/easteregg.component";


const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', component: GenTableComponent },
  { path: 'omidology', component: OmidologyComponent },
  { path: 'Form/input', component: InputFormComponent },
  {
    path: 'auth',
    loadChildren: './auth-user/auth-user.module#AuthUserModule',
  },
  { path: 'easteregg', component: EastereggComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

