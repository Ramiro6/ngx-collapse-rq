import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxCollapseRqModule} from '../../../ngx-collapse-rq/src/lib/ngx-collapse-rq.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCollapseRqModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
