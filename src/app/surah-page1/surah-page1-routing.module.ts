import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurahPage1Page } from './surah-page1.page';

const routes: Routes = [
  {
    path: '',
    component: SurahPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurahPage1PageRoutingModule {}
