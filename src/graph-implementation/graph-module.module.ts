import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph-demo/graph.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [GraphComponent],
  providers: [],
  bootstrap: [GraphComponent],
})
export class GraphModuleModule {}