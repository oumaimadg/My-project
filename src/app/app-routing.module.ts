import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { FichesComponent } from './fiches/fiches.component';
import { SettingsComponent } from './settings/settings.component';



const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calendrier', component: CalendrierComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'message', component: MessageComponent},
  {
    path: 'fiches', 
    loadChildren: () => import('./fiches/fiches.module').then(m => m.FichesModule)
  },
  {path: 'settings', component: SettingsComponent}

  
  
  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
