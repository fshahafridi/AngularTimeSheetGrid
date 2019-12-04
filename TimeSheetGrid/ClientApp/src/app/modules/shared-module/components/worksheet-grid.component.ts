
import { Component, QueryList, ViewChildren, ElementRef, Renderer, Input } from "@angular/core";
import { WorkSheetModel } from '../../../modules/worksheet-module/models/worksheet.model';
import { EditableRow } from "primeng/table";
import { RowMode } from "../enums/grid.rowmode.enum";
import { ConfirmationService } from 'primeng/api';



@Component({
  selector: 'worksheet-grid',
  templateUrl: './worksheet-grid.component.html',
  providers: [ConfirmationService]
})


export class WorkSheetGrid {
  //properties
  @Input("workSheetData") workSheetData: WorkSheetModel[];
  workSheetNewRow: WorkSheetModel;
  defaultHourlyRate: number = 250.50;
  isAddMode: boolean = false;
  editRecordId: number = 0;
  rowMode = RowMode;
  selectedRecordId = 0;
  //constructor
  constructor(private confirmationService: ConfirmationService) { }

  //when add new button is clicked
  onAddNewRow() {
    this.isAddMode = true;
    this.workSheetNewRow = { recordId: this.maxRecordId, state: 1, title: "", type: "", typeId: "", duration: "", defaultRate: this.defaultHourlyRate, hourlyrate: this.defaultHourlyRate.toString(), total: "" };
  }
  //we need to assign unique value for each record. get the max counter in array 
  get maxRecordId() {
    return this.workSheetData.length + 1;;
  }
  // this event will be called when the save button in grid is clicked.this will be triggered by the child
  onRowAdd(params: WorkSheetModel) {
    //Add  new element on top of list...
    this.workSheetData.unshift(params);
    this.isAddMode = false;
  }

  // this event will be called when the save button in grid is clicked.this will be triggered by the child
  onRowUpdate(params: WorkSheetModel) {
    //Update the entry in collection..
    var index = this.workSheetData.findIndex((worksheetRecord: WorkSheetModel) => worksheetRecord.recordId == params.recordId);
    if (index > -1) {

      this.workSheetData[index] = params;
    }

    this.editRecordId = 0;
  }

 // this event will be called when the canceled button in grid is clicked.this will be triggered by the child
  onRowCancelled(params: RowMode) {
    //if row is in add mode then dismiss row addtion..
    if (params == RowMode.Add) {
      this.isAddMode = false;
    }
    //if row is in edit mode then dismiss row updation..
    if (params == RowMode.Edit) {
      this.editRecordId = 0;
    }
  }
   // this event will be called when the Edit button in grid is clicked.
    onRowEdit(params: WorkSheetModel) {
    this.editRecordId = params.recordId;
  }
    
 // this event will be called when row is selected...
  onRowSelect(recordId: number) {

    this.selectedRecordId = recordId;
  }
   // this event will be called when the submit button  is clicked.
  onTimeSheetSubmit() {
    debugger;
    var timeSheetEntry  = this.workSheetData.find((worksheetRecord: WorkSheetModel) => worksheetRecord.recordId == this.selectedRecordId);
    if (timeSheetEntry !=null) {
      timeSheetEntry.state = 2;
      this.selectedRecordId = 0;
    }
  }
   // this event will be called when the delete button  is clicke in the grid
  onRowDelet(recordId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this timesheet entry?',
      accept: () => {
        var index = this.workSheetData.findIndex((worksheetRecord: WorkSheetModel) => worksheetRecord.recordId == recordId);
        if (index > -1) {
          this.workSheetData.splice(index, 1);
        }
      }
    });

  }
}

