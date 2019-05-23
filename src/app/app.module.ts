import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppTag } from './app.tag';

@NgModule({
  declarations: [
    AppTag
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppTag]
})
export class AppModule { }
