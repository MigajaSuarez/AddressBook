import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
