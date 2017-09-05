import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routes-module';
import { SharedModule } from '../../shared/shared.module';
import {AUTH_COMPONENTS_PROVIDERS} from './components/providers';
@NgModule({
  declarations: [
    AuthComponent,
    ...AUTH_COMPONENTS_PROVIDERS
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent,
    ...AUTH_COMPONENTS_PROVIDERS
  ],
  providers: [],
})
export class AuthModule { }
