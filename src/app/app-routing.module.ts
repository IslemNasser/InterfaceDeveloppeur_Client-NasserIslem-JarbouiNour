import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginDevComponent } from './login-dev/login-dev.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { ResetMdpDevComponent } from './reset-mdp-dev/reset-mdp-dev.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjetComponent } from './projet/projet.component';
import { AuthGuard } from './service/auth.service';
import { TacheComponent } from './tache/tache.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginDevComponent},
  {path:'contact',component:ContactComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'service',component:ServiceComponent,canActivate:[AuthGuard]},
  {path:'RestMdp',component:ResetMdpDevComponent},
  {path:'profil',component:ProfilComponent,canActivate:[AuthGuard]},
  {path:'projet',component:ProjetComponent,canActivate:[AuthGuard]},
  {path:'tache',component:TacheComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
