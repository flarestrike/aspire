import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedMod } from './shared.mod';

import { gtagID } from '@chakray/utils/gtag';
import { environment as env } from 'src/environments/environment';

import { AppRouting } from './app.routing';
import { AppTag } from './app.tag';

@NgModule({
  declarations: [
    AppTag
  ],
  imports: [
    SharedMod,
    AppRouting,
    BrowserModule
  ],
  providers: [
    { provide: gtagID, useValue: env.gtagId },
  ],
  bootstrap: [AppTag]
})
export class AppModule { }
