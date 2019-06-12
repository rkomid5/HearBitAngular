import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUserRoutingModule } from './auth-user-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { UserinComponent } from './userin/userin.component';
import { RolesComponent } from './roles/roles.component';
import { AsignComponent } from './asign/asign.component';

import {MatTableModule, MatPaginatorModule, MatSortModule,
  MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDialogModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatCardModule} from '@angular/material';

import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [WelcomeComponent, LoginComponent, UserinComponent, RolesComponent, AsignComponent],
  imports: [
    CommonModule,
    AuthUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule, MatPaginatorModule, MatSortModule,MatCardModule,
    MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDialogModule,MatCheckboxModule,MatButtonModule,
    MatStepperModule,
    MatSelectModule
  ]
})
export class AuthUserModule { }
