import { NgModule } from '@angular/core';

import { AlPageTag } from './page/page.tag';

const tags = [
  AlPageTag];

@NgModule({
  // imports: [RouterModule],
  declarations: [...tags],
  exports: [...tags]
})
export class LayoutMod {}
