import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./login/login.component";
import {UserinComponent} from "./userin/userin.component";
import {RolesComponent} from "./roles/roles.component";
import {AsignComponent} from "./asign/asign.component";

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'loginss',
        component: LoginComponent,
      },
      {
        path: 'users',
        component: UserinComponent,
      },
      {
        path: 'roles',
        component: RolesComponent,
      },
      {
        path: 'maper',
        component: AsignComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthUserRoutingModule { }
