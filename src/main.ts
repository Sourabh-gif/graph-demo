import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GraphModuleModule } from './graph-implementation/graph-module.module';




platformBrowserDynamic().bootstrapModule(GraphModuleModule)
  .catch(err => console.error(err));
