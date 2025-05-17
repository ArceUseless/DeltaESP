import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SpamtomSweepstakesComponent } from './pages/spamtom-sweepstakes/spamtom-sweepstakes.component';
import { CodeComponent } from './pages/spamtom-sweepstakes/code/code.component';
import { CommentsComponent } from './pages/spamtom-sweepstakes/code/comments/comments.component';
import { EggComponent } from './pages/spamtom-sweepstakes/egg/egg.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SecretpipisComponent } from './pages/spamtom-sweepstakes/secretpipis/secretpipis.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'sweepstakes', component: SpamtomSweepstakesComponent},
  { path: 'code', component: CodeComponent, title: '¡Bienvenidos al blog de secretos, glitches y teorías de holidaygirl1225!'},
  { path: 'code/comments', component: CommentsComponent, title: '¡Bienvenidos al blog de secretos, glitches y teorías de holidaygirl1225!'},
  { path: 'egg', component: EggComponent, title: '¡Bienvenidos al blog de secretos, glitches y teorías de holidaygirl1225!'},
  { path: 'secretpipis', component: SecretpipisComponent, title: '¡Has perdido!'},
  { path: '', component: HomeComponent},
  { path: 'pagina-no-encontrada', component: NotfoundComponent},
  { path: '**', redirectTo: 'pagina-no-encontrada'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
