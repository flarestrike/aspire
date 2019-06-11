import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CtIconMod as IconMod, iconSet } from '@chakray/tags';
import { aspire } from 'src/assets/fonts/aspire';

import { AppRouting } from './app.routing';
import { AppTag } from './app.tag';

@NgModule({
  declarations: [
    AppTag
  ],
  imports: [
    IconMod,
    AppRouting,
    BrowserModule
  ],
  providers: [
    { provide: iconSet, useValue: aspire, multi: true }
  ],
  bootstrap: [AppTag]
})
export class AppModule { }
