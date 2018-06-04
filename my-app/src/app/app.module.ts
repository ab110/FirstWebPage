import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { AboutMeComponent } from './components/about-me.component';
import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'aboutMe',
        component: HomeComponent
      },
      {
        path:'',
        component: AboutMeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
