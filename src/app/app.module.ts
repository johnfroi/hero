import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './components/heroComponent/heroes/heroes.component';
import { HeroDetailComponent } from './components/heroComponent/hero-detail/hero-detail.component';
import { HeroService } from './services/heroServices/hero.service';
import { MessageService } from './services/heroServices/message.service';
import { MessagesComponent } from './components/heroComponent/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
