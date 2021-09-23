import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeywordInputComponent } from './components/keyword-input/keyword-input.component';
import { KeywordBadgeComponent } from './components/keyword-badge/keyword-badge.component';
import { WordGeneratorComponent } from './components/word-generator/word-generator.component';
import { WordService } from './components/word-generator/word.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    KeywordInputComponent,
    KeywordBadgeComponent,
    WordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
