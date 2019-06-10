import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmMapsMod, CmMapsConfig } from '@chakray/maps';
import { LmapsConfig } from './lmaps.config';

import { CtLzmgMod } from '@chakray/tags';
import { ChartsMod, ChartEngine } from '@chakray/charts';
import { ChartistEngine, D3Engine } from './charts';

import { Label } from './label';
import { PlacesTag } from './places/places.tag';

const tags = [PlacesTag];

@NgModule({
  imports: [
    ChartsMod,
    CmMapsMod,
    CtLzmgMod,
    CommonModule,
  ],
  declarations: [...tags],
  providers: [
    { provide: ChartEngine, useClass: ChartistEngine, multi: true },
    { provide: ChartEngine, useClass: D3Engine, multi: true },
    { provide: CmMapsConfig, useClass: LmapsConfig, multi: true },
    Label],
  exports: [
    ...tags,
    ChartsMod,
    CmMapsMod,
    CommonModule,
  ]
})
export class SharedMod {}
