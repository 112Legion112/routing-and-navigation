import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRouter: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'fullgit remote add origin git@github.com:112Legion112/routing-and-navigation.git'},
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent, },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRouter,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
