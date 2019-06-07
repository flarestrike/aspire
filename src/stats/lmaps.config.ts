import { Injectable } from '@angular/core';
import { tileLayer, map } from 'leaflet';

import { environment as env } from 'src/environments/environment';
import { CmMapsConfig as MapsConfig, CmMapsLoaderMod as LoaderMod } from '@chakray/maps';

@Injectable({ providedIn: LoaderMod })
export class LmapsConfig extends MapsConfig {
  // provide apis
  api = { map, tileLayer };
  mapOptions = {
    worldCopyJump: true
  };
  constructor() {
    super();
    // provide vendor to call correspond init procedure
    this.vendor = 'Leaflet';
    // provide vendor specific configs
    this.tileHost = env.tileHost;
    // either set as loaded or let cfg$ being updated from remote
    this.loaded = true;
    // this.cfg$.next(this);
    // console.log('lmaps init')
  }
}
