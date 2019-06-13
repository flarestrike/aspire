import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CtIconMod as IconMod, iconSet } from '@chakray/tags';
import { brand } from 'src/assets/fonts/brand';

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
    { provide: iconSet, useValue: brand, multi: true }
  ],
  bootstrap: [AppTag]
})
export class AppModule { }
