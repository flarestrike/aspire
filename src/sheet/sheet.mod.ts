import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeTag } from './home.tag';

const routes: Routes = [{
  path: '',
  component: HomeTag
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [HomeTag],
  exports: [RouterModule]
})
export class SheetMod {}
