import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule, NbSidebarModule, NbMenuModule, NbIconModule, NbButtonModule, NbDatepickerModule, NbSelectModule, NbDialogModule, NbToastrModule, NbListModule, NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SecurityComponent } from './_components/security/security.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './_components/nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './_components/home/home.component';
import { AnimalComponent } from './_components/animal/animal.component';
import { LoaderComponent } from './_components/loader/loader.component';
import { LoaderInterceptor } from './_interceptors/loader.interceptor';
import { PetComponent } from './_components/pet/pet.component';


@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    NavComponent,
    HomeComponent,
    AnimalComponent,
    LoaderComponent,
    PetComponent
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
    NbActionsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
