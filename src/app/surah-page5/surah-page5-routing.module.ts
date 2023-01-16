import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurahPage5Page } from './surah-page5.page';

const routes: Routes = [
  {
    path: '',
    component: SurahPage5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurahPage5PageRoutingModule {}
