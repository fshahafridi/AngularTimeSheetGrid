//system imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//App Imports
import { SharedModule } from './modules/shared-module/shared.module';
import { WorkSheetModule } from './modules/worksheet-module/worksheet.module';
 
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    WorkSheetModule,
    SharedModule.forRoot(),
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
