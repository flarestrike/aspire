import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CtLzmgMod } from '@chakray/tags';

import { CmMapsMod, CmMapsConfig } from '@chakray/maps';
import { LmapsConfig } from './lmaps.config';

import { ChartsMod, ChartEngine } from '@chakray/charts';
import { ChartistEngine, D3Engine } from './charts';

import { SharedMod as AppShared } from 'src/app/shared.mod';
import { NavMod } from 'src/nav';
import { LayoutMod } from 'src/layout';

import { Label } from './label';
import { PlacesTag } from './places/places.tag';

const tags = [PlacesTag];
const mods = [
    AppShared,
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
