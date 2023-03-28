import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentoneComponent } from './componentone/componentone.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentoneComponent
  ],
  exports:[
    ComponentoneComponent
  ]
})
export class ModuleoneModule { }