
import { Component, OnInit } from "@angular/core";
import { WorkSheetModel } from '../models/worksheet.model';
import { WorkSheetDataService } from "../services/worksheetdata.service";


@Component({
  selector: 'worksheet',
  templateUrl: './worksheet.component.html',
})
export class WorkSheet implements OnInit {

  workSheetData: WorkSheetModel[]=[];
  constructor(private worksheeetService: WorkSheetDataService) { }
  ngOnInit() {
    //Load the data from Json and pass it the main Grid..
    this.worksheeetService.getWorkSheetData().then((data:any) => this.workSheetData = data);
     
   }



}

