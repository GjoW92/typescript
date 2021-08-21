import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './components/champion/champion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { ChampionFormComponent } from './components/champion-form/champion-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'champions', component: ChampionComponent },
  { path: 'champion/:id', component: ChampionDetailComponent },
  { path: 'add-champion', component: ChampionFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
