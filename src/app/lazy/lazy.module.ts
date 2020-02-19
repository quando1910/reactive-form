import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormModule } from '@theflames/reactive-form';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  },
];

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
