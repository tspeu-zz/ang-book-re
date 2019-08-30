import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
//
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

//
import { AnimatorComponent } from './animator/animator.component';
import { AnimadoComponent } from './animado/animado.component';

const route: Routes = [
  {path: '', component: AnimatorComponent},
  {path: 'animado', component: AnimadoComponent }
];

@NgModule({
  declarations: [AnimatorComponent, AnimadoComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forChild(route)
  ]
})
export class AnimacionModule { }
