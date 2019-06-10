import { NgModule } from '@angular/core';

import { AnFooterTag } from './footer/footer.tag';

const tags = [
  AnFooterTag];

@NgModule({
  declarations: [...tags],
  exports: [...tags]
})
export class NavMod {}
