import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'surah-page1',
    loadChildren: () => import('./surah-page1/surah-page1.module').then( m => m.SurahPage1PageModule)
  },
  {
    path: 'surah-page2',
    loadChildren: () => import('./surah-page2/surah-page2.module').then( m => m.SurahPage2PageModule)
  },
  {
    path: 'surah-page3',
    loadChildren: () => import('./surah-page3/surah-page3.module').then( m => m.SurahPage3PageModule)
  },
  {
    path: 'surah-page4',
    loadChildren: () => import('./surah-page4/surah-page4.module').then( m => m.SurahPage4PageModule)
  },
  {
    path: 'surah-page5',
    loadChildren: () => import('./surah-page5/surah-page5.module').then( m => m.SurahPage5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
