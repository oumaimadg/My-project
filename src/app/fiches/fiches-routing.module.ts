import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichesComponent } from './fiches.component';
import { FicheStageComponent } from './fiche-stage/fiche-stage.component';

const routes: Routes = [
  {
    path: 'stage',
    component: FichesComponent
  },
  {
    path: 'sortie',
    component: FicheStageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichesRoutingModule { }
