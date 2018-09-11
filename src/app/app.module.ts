import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormGeneratorModule } from './modules/form-generator/form-generator.module';
import { TableGeneratorModule } from './modules/table-generator/table-generator.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormGeneratorModule, TableGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
