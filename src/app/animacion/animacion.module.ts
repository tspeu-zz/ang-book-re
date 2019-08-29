import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

//
import { AnimatorComponent } from './animator/animator.component';

const route: Routes = [
  {path: '', component: AnimatorComponent }
];

@NgModule({
  declarations: [AnimatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AnimacionModule { }
