import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeywordInputComponent } from './components/keyword-input/keyword-input.component';
import { KeywordBadgeComponent } from './components/keyword-badge/keyword-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordInputComponent,
    KeywordBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
