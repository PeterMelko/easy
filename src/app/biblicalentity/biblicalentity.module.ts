import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BiblicalentityPage } from './biblicalentity.page';

const routes: Routes = [
  {
    path: '',
    component: BiblicalentityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BiblicalentityPage]
})
export class BiblicalentityPageModule {}
