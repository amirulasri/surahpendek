import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurahPage3Page } from './surah-page3.page';

const routes: Routes = [
  {
    path: '',
    component: SurahPage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurahPage3PageRoutingModule {}
