import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResumeComponent } from './pages/resume';
import { HeaderComponent } from './pages/resume/header';
import { BodyComponent } from './pages/resume/body';

import { DalService } from './services';
import { CardComponent } from './pages/resume/body/card/card.component';
import { TagComponent } from './pages/resume/body/card/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HeaderComponent,
    BodyComponent,
    CardComponent,
    TagComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
