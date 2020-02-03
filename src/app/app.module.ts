import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule, NbSidebarModule, NbMenuModule, NbIconModule, NbButtonModule, NbDatepickerModule, NbSelectModule, NbDialogModule, NbToastrModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SecurityComponent } from './_components/security/security.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './_components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './_components/home/home.component';
import { AnimalComponent } from './_components/animal/animal.component';


@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    NavComponent,
    HomeComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbIconModule,
    NbButtonModule,
    NbDatepickerModule.forRoot(),
    NbSelectModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbListModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
