import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forChild(route)
  ]
})
export class AnimacionModule { }
