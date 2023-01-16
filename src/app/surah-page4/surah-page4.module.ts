import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurahPage4PageRoutingModule } from './surah-page4-routing.module';

import { SurahPage4Page } from './surah-page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurahPage4PageRoutingModule
  ],
  declarations: [SurahPage4Page]
})
export class SurahPage4PageModule {}
