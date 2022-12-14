import { LibroDetailComponent } from './libro/libro-detail/libro-detail.component';
import { LibroListComponent } from './libro/libro-list/libro-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibroCreateComponent } from './libro/libro-create/libro-create.component';
import { LibroDeleteComponent } from './libro/libro-delete/libro-delete.component';
import { LibroUpdateComponent } from './libro/libro-update/libro-update.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'libro/list', component: LibroListComponent },
  { path: 'libro/create', component: LibroCreateComponent },
  { path: 'libro/:id', component: LibroDetailComponent },
  { path: 'libro/delete/:id', component: LibroDeleteComponent },
  { path: 'libro/update/:id', component: LibroUpdateComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
