import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmMapsMod, CmMapsConfig } from '@chakray/maps';
import { LmapsConfig } from './lmaps.config';

import { CtLzmgMod } from '@chakray/tags';

import { Label } from './label';
import { PlacesTag } from './places/places.tag';

const tags = [PlacesTag];

@NgModule({
  imports: [
    CmMapsMod,
    CtLzmgMod,
    CommonModule,
  ],
  declarations: [...tags],
  providers: [
    { provide: CmMapsConfig, useClass: LmapsConfig, multi: true },
    Label],
  exports: [
    ...tags,
    CmMapsMod,
    CommonModule,
  ]
})
export class SharedMod {}
