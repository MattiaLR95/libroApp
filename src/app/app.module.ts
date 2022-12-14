import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LibroListComponent } from './libro/libro-list/libro-list.component';
import { LibroCreateComponent } from './libro/libro-create/libro-create.component';
import { FormsModule } from '@angular/forms';
import { LibroDetailComponent } from './libro/libro-detail/libro-detail.component';
import { LibroDeleteComponent } from './libro/libro-delete/libro-delete.component';
import { LibroUpdateComponent } from './libro/libro-update/libro-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    LibroListComponent,
    LibroCreateComponent,
    LibroDetailComponent,
    LibroDeleteComponent,
    LibroUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
