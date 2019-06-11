import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMod } from 'src/nav';
import { LayoutMod } from 'src/layout';
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
    CtLzmgMod,
    LayoutMod,
    ChartsMod,
    CmMapsMod,
    CommonModule,
];

@NgModule({
  imports: [
    ...mods,
  ],
  declarations: [...tags],
  providers: [
    Label,
    { provide: ChartEngine, useClass: ChartistEngine, multi: true },
    { provide: ChartEngine, useClass: D3Engine, multi: true },
    { provide: CmMapsConfig, useClass: LmapsConfig, multi: true },
  ],
  exports: [
    ...tags,
    ...mods,
  ]
})
export class SharedMod {}
