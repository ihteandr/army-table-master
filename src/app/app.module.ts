import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { ElectronService } from './providers/electron.service';
import {Configs} from './configs';
import {
  AuthModule,
  TableModule
} from './modules';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    SharedModule,
    TableModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
