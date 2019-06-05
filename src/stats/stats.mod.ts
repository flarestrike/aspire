import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedMod } from './shared.mod';
import { HomeTag } from './home.tag';

const routes: Routes = [{
  path: '',
  component: HomeTag
}];

@NgModule({
  imports: [
    SharedMod,
    RouterModule.forChild(routes)],
  declarations: [HomeTag],
  exports: [RouterModule]
})
export class StatsMod {}
