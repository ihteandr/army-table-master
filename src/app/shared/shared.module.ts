import { NgModule } from '@angular/core';
import { SERVICE_PROVIDERS } from './services/providers';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers:[
    ...SERVICE_PROVIDERS
  ]
})
export class SharedModule{

}
