import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanosComponent } from './planos/planos.component';
import { ContactComponent } from './contact/contact.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'planos', component: PlanosComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'quemsomos', component: QuemsomosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
