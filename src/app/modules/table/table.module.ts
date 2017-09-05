import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table.routes-module';
import { SharedModule } from '../../shared/shared.module';
import {TABLE_COMPONENTS_PROVIDERS} from './components/providers';

@NgModule({
  declarations: [
    TableComponent,
    ...TABLE_COMPONENTS_PROVIDERS
  ],
  imports: [
    SharedModule,
    TableRoutingModule
  ],
  exports: [
    TableComponent,
    ...TABLE_COMPONENTS_PROVIDERS
  ],
  providers: [],
})
export class TableModule { }
