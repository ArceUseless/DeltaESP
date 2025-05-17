import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SpamtomSweepstakesComponent } from './pages/spamtom-sweepstakes/spamtom-sweepstakes.component';
import { FormsModule } from '@angular/forms';
import { CodeComponent } from './pages/spamtom-sweepstakes/code/code.component';
import { CommentsComponent } from './pages/spamtom-sweepstakes/code/comments/comments.component';
import { EggComponent } from './pages/spamtom-sweepstakes/egg/egg.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SecretpipisComponent } from './pages/spamtom-sweepstakes/secretpipis/secretpipis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SpamtomSweepstakesComponent,
    CodeComponent,
    CommentsComponent,
    EggComponent,
    NotfoundComponent,
    SecretpipisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
