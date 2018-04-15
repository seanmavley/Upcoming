import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './transaction/home/home.component';

const routes: Routes = [
  { path: '', component: MenuComponent, children: [
    { path: '', loadChildren: './transaction/transaction.module#TransactionModule' }
  ]},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
