import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CtIconMod as IconMod, iconSet } from '@chakray/tags';

import { AnEmptyTag } from './empty/empty.tag';
import { AnSpanTag } from './span/span.tag';
import { AnLinkTag } from './link/link.tag';
import { AnFooterTag } from './footer/footer.tag';

const tags = [
  AnEmptyTag,
  AnSpanTag,
  AnLinkTag,
  AnFooterTag];

@NgModule({
  imports: [
    IconMod,
    CommonModule,
    RouterModule],
  providers: [
  ],
  declarations: [...tags],
  exports: [...tags, RouterModule]
})
export class NavMod {}
