import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaillistComponent } from './components/maillist/maillist.component';
import { MailitemComponent } from './components/mailitem/mailitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MaillistComponent,
    MailitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
