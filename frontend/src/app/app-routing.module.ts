import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaterialsComponent} from './materials/materials.component'
import {DeleteMaterialComponent} from './delete-material/delete-material.component'
import {AddMaterialsComponent} from './add-materials/add-materials.component'
const routes: Routes = [
  {
    path:'materials',
    component: MaterialsComponent
  },
  {
    path:'addmat',
    component:AddMaterialsComponent
  },
  {
    path:'delete',
    component:DeleteMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
