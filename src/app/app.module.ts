import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CtIconMod as IconMod, iconSet } from '@chakray/tags';
import { aspire } from 'src/assets/fonts/aspire';

import { gtagID } from '@chakray/utils/gtag';
import { environment as env } from 'src/environments/environment';

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
    { provide: gtagID, useValue: env.gtagId },
    { provide: iconSet, useValue: aspire, multi: true }
  ],
  bootstrap: [AppTag]
})
export class AppModule { }
