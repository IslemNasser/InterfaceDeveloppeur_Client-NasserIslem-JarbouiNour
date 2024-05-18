import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginDevComponent } from './login-dev/login-dev.component';
import { RegisterComponent } from './register/register.component';
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';
import { ResetMdpDevComponent } from './reset-mdp-dev/reset-mdp-dev.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjetComponent } from './projet/projet.component';
import { TacheComponent } from './tache/tache.component';
import { ListContactComponent } from './list-contact/list-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginDevComponent,
    RegisterComponent,
    ServiceComponent,
    ResetMdpDevComponent,
    ProfilComponent,
    ProjetComponent,
    TacheComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
