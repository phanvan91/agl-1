import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Bai58ContactComponent } from './bai58-contact/bai58-contact.component';
import { Bai58ContactDetailComponent } from './bai58-contact-detail/bai58-contact-detail.component';
import { Bai58PageNotFoundComponent } from './bai58-page-not-found/bai58-page-not-found.component';


const routesConfig: Routes = [
  {path: 'contact', component: Bai58ContactComponent},
  {path: 'detail/:id', component: Bai58ContactDetailComponent },
  { path: '', redirectTo: '/contact', pathMatch:'full' },
  { path: '**', component: Bai58PageNotFoundComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routesConfig),CommonModule],
  declarations:[
    Bai58ContactComponent,
    Bai58ContactDetailComponent,
    Bai58PageNotFoundComponent,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
