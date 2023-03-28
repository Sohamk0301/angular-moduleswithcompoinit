import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModuleoneModule } from './moduleone/moduleone.module';
import { ComponentoneComponent } from './moduleone/componentone/componentone.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ModuleoneModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
