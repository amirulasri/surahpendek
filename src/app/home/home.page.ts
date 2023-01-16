import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filterTerm: string;
  constructor(private router: Router) {}
  listSurah = [
    {
      id: 1,
      surahName: "Al Qadr",
      surahAyatCount: 5,
    },
    {
      id: 2,
      surahName: "An Nas",
      surahAyatCount: 6,
    },
    {
      id: 3,
      surahName: "Al Falaq",
      surahAyatCount: 5,
    },
    {
      id: 4,
      surahName: "Al Kafirun",
      surahAyatCount: 6,
    },
    {
      id: 5,
      surahName: "Al Ikhlas",
      surahAyatCount: 4,
    }
  ];
  navigateSurahPage(surahid: any){
    this.router.navigate(['/surah-page'+surahid])
  }
}
