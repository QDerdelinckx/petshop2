import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { SecurityComponent } from './_components/security/security.component';
import { AnimalComponent } from './_components/animal/animal.component';
import { IsAdminGuard } from './_guards/is-admin.guard';
import { PetComponent } from './_components/pet/pet.component';
import { BreedComponent } from './_components/breed/breed.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'animal', component: AnimalComponent, canActivate: [IsAdminGuard ]},
  { path: 'pet/:animalName', component: PetComponent},
  { path: 'breed', component:BreedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
