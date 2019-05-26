import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LabelSrc {
  constructor() { }
  load(k) {
    return of({ a: 1, b: 2 } as any);
  }
}
