//angular imports..
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { WorkSheet } from './components/worksheet.component'
import { WorkSheetDataService } from './services/worksheetdata.service';

 
 



@NgModule({
  declarations: [
    WorkSheet
  ],

   imports: [
    SharedModule,
    RouterModule
  ],
  providers: [WorkSheetDataService]

})
export class WorkSheetModule { }
