import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurahPage5PageRoutingModule } from './surah-page5-routing.module';

import { SurahPage5Page } from './surah-page5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurahPage5PageRoutingModule
  ],
  declarations: [SurahPage5Page]
})
export class SurahPage5PageModule {}
