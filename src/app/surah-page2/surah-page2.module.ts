import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurahPage2PageRoutingModule } from './surah-page2-routing.module';

import { SurahPage2Page } from './surah-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurahPage2PageRoutingModule
  ],
  declarations: [SurahPage2Page]
})
export class SurahPage2PageModule {}
