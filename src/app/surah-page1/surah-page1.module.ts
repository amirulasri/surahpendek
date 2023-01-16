import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurahPage1PageRoutingModule } from './surah-page1-routing.module';

import { SurahPage1Page } from './surah-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurahPage1PageRoutingModule
  ],
  declarations: [SurahPage1Page]
})
export class SurahPage1PageModule {}
