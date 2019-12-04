
import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { WorkSheetModel } from "../../worksheet-module/models/worksheet.model";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { parse } from "url";
import { RowMode } from "../enums/grid.rowmode.enum";

//Work type interface forloading work type list
interface WorkType {
  name: string;
  value: string;
}




@Component({
  //We have to display the component tag as <div> so enclosed the selector in []
  selector: '[worksheet-row]',
  templateUrl: 'worksheet-grid-row.component.html',
})


export class WorkSheetGridRow implements OnInit {

  //properties
  WorkSheetEntryForm: FormGroup;
  workType: WorkType[];
  totalDuration: number = 0;
  //Input property to get the model data...
  @Input("rowData") rowData: WorkSheetModel;
  @Input("rowMode") rowMode: RowMode;
  //Event emitters for the parent control
  @Output() rowAdded = new EventEmitter();
  @Output() rowUpdated = new EventEmitter();
  @Output() rowCancelled = new EventEmitter();
  submitted = false;
  regexValidDecimal: RegExp = /^\d+(\.\d{1,2})?$/;
  regexValidDuration: RegExp = /^\d+([:][0-5][0-9])?$/;

  //constructor
  constructor(private formBuilder: FormBuilder) {

    //init work types..
    this.workType = [
      { value: "1", name: "Telephone Call" },
      { value: "2", name: "Research " },
      { value: "3", name: "Drafting Document " }
    ]
  }

  // conventient method to get the Form elements in HTML
  get workSheetForm() {
    return this.WorkSheetEntryForm.controls;
  }

 
  ngOnInit(): void {

    //Init Reactive form for new work sheet entry. the same will be used for Edit..
    this.WorkSheetEntryForm = this.formBuilder.group({

      'title': new FormControl(this.rowData.title, Validators.required),
      'type': new FormControl((this.rowData.typeId == null ? null : this.getWorkTypeValue(this.rowData.typeId)), Validators.required),
      'duration': new FormControl(this.rowData.duration, [Validators.required, Validators.pattern(this.regexValidDuration)]),
      'hourlyrate': new FormControl(this.rowData.hourlyrate, Validators.pattern(this.regexValidDecimal)),

    });
  }

  getWorkTypeValue(value: any) {
    return this.workType.filter(obj => obj.value == value)[0];
  }
  get calculateTotal() {

    // if values are valid then calculate the total duration
    if (this.workSheetForm.duration.valid && this.workSheetForm.hourlyrate.valid) {
      
      var rate = this.workSheetForm.hourlyrate.value.length == 0 ? this.rowData.defaultRate : parseFloat(this.workSheetForm.hourlyrate.value);
      var durration = this.workSheetForm.duration.value.split(':');
      //get the hour and minute part
      var hours = durration[0];
      var minutes = 15;
      var totalDurationInHours = 0;
      //if minute part is provided then convert to it the nearest 15 mins
      if (durration.length > 1) {
        minutes = parseInt( durration[1]);
        if (minutes < 15) {
          var minutesToAdd = 15 - minutes;
          minutes = minutesToAdd + minutes;
        }
      }
      //convert the total time in minutes and calculate the total amount
      totalDurationInHours = ((parseInt(hours) * 60) + minutes) / 60;
      this.totalDuration = totalDurationInHours * rate;
    
    }
  return   this.totalDuration;
  }

  //Submit the form
  onSubmit() {
    this.submitted = true;
    
    
    if (this.WorkSheetEntryForm.valid) {
      //save the data Array and emit it to the parent grid component so it refresh itself...
      //Create a new model entry and pass it to th pearent....;
      let newRowData: WorkSheetModel = {
        recordId: this.rowData.recordId,
        title: this.workSheetForm.title.value,
        duration: this.workSheetForm.duration.value,
        typeId: this.workSheetForm.type.value.value,
        type: this.workSheetForm.type.value.name,
        hourlyrate: this.workSheetForm.hourlyrate.value.length == 0 ? this.rowData.defaultRate.toString() : this.workSheetForm.hourlyrate.value,
        state: 1,
        total: this.totalDuration.toString(),
        defaultRate: this.rowData.defaultRate
      }
      //If we are adding a new row then emit add event to the parent..
      if (this.rowMode == RowMode.Add) {
        this.rowAdded.emit(newRowData);
      }
      //If we are updating a new row then emit updated event to the parent..
      if (this.rowMode == RowMode.Edit) {
        this.rowUpdated.emit(newRowData);
      }
    }
    

  }
  //when the cancel button is clicked
  onRowCancelled() {
    //Call the can event based on Add or updated...
    this.rowCancelled.emit(this.rowMode);
  }
}

