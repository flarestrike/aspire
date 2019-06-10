import { NgModule } from '@angular/core';

import { AnLinkTag } from './link/link.tag';
import { AnFooterTag } from './footer/footer.tag';

const tags = [
  AnLinkTag,
  AnFooterTag];

@NgModule({
  declarations: [...tags],
  exports: [...tags]
})
export class NavMod {}
