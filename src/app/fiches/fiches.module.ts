import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichesRoutingModule } from './fiches-routing.module';
import { FichesComponent } from './fiches.component';
import { FicheStageComponent } from './fiche-stage/fiche-stage.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    FichesComponent,
    FicheStageComponent,
  ],
  imports: [
    CommonModule,
    FichesRoutingModule,
    MatDatepickerModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule

  ]
})
export class FichesModule { }
