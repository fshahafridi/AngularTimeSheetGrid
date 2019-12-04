//angular imports..
import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//PrimNG
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog'; 

//App import 
import { WorkSheetGrid } from './components/worksheet-grid.component';
//App import 
import { WorkSheetGridRow } from './components/worksheet-grid-row.component';
 


@NgModule({
  declarations: [
    WorkSheetGrid,
    WorkSheetGridRow
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ConfirmDialogModule
  ],

  exports: [
    WorkSheetGrid,
    WorkSheetGridRow,
    RouterModule,
    CommonModule,
    NgbModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    DropdownModule,
    ConfirmDialogModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule

    };
  }
}
