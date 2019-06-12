import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule,
MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDialogModule, MatStepperModule, MatSelectModule, MatSlideToggleModule, MatCardModule} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GenTableComponent } from './gen-table/gen-table.component';
import { OmidologyComponent } from './omidology/omidology.component';
import { InputFormComponent } from './Forms/input-form/input-form.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {SDKBrowserModule} from "./shared/SDK";
import { EastereggComponent } from './easteregg/easteregg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GenTableComponent,
    OmidologyComponent,
    InputFormComponent,
    EastereggComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
