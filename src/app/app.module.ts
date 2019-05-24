import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppTag } from './app.tag';

@NgModule({
  declarations: [
    AppTag
  ],
  imports: [
    AppRouting,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppTag]
})
export class AppModule { }
