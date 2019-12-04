import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WorkSheetModel } from '../models/worksheet.model';

@Injectable()
export class WorkSheetDataService {
  
  constructor(private http: HttpClient) { }

  getWorkSheetData() {
    return this.http.get<any>('assets/data/worksheetdata.json')
      .toPromise()
      .then(res => <WorkSheetModel[]>res.data)
      .then(data => { return data; });
  }

   
}
