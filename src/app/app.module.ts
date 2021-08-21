import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { ChampionComponent } from './components/champion/champion.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ChampionSearchComponent } from './components/champion-search/champion-search.component';
import { ChampionFormComponent } from './components/champion-form/champion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    ChampionDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeaderComponent,
    ChampionSearchComponent,
    ChampionFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
