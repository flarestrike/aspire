import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMod } from 'src/nav';
import { CmMapsMod, CmMapsConfig } from '@chakray/maps';
import { LmapsConfig } from './lmaps.config';

import { CtLzmgMod } from '@chakray/tags';
import { ChartsMod, ChartEngine } from '@chakray/charts';
import { ChartistEngine, D3Engine } from './charts';

import { Label } from './label';
import { PlacesTag } from './places/places.tag';

const tags = [PlacesTag];
const mods = [
    NavMod,
    ChartsMod,
    CmMapsMod,
    CommonModule,
];

@NgModule({
  imports: [
    ...mods,
    CtLzmgMod,
  ],
  declarations: [...tags],
  providers: [
    { provide: ChartEngine, useClass: ChartistEngine, multi: true },
    { provide: ChartEngine, useClass: D3Engine, multi: true },
    { provide: CmMapsConfig, useClass: LmapsConfig, multi: true },
    Label],
  exports: [
    ...tags,
    ...mods,
  ]
})
export class SharedMod {}
