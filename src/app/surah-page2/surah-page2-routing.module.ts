import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurahPage2Page } from './surah-page2.page';

const routes: Routes = [
  {
    path: '',
    component: SurahPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurahPage2PageRoutingModule {}
