import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurahPage3PageRoutingModule } from './surah-page3-routing.module';

import { SurahPage3Page } from './surah-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurahPage3PageRoutingModule
  ],
  declarations: [SurahPage3Page]
})
export class SurahPage3PageModule {}
