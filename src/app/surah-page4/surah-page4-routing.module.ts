import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurahPage4Page } from './surah-page4.page';

const routes: Routes = [
  {
    path: '',
    component: SurahPage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurahPage4PageRoutingModule {}
