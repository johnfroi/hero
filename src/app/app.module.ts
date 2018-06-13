import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './components/heroComponent/heroes/heroes.component';
import { HeroDetailComponent } from './components/heroComponent/hero-detail/hero-detail.component';
import { HeroService } from './services/heroServices/hero.service';
import { MessageService } from './services/heroServices/message.service';
import { MessagesComponent } from './components/heroComponent/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
