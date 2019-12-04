 
import { RouterModule, Routes } from '@angular/router';
import { WorkSheet } from './modules/worksheet-module/components/worksheet.component';
 

const APP_ROUTES: Routes = [
  
  {
    path: '',
    redirectTo: 'worksheet',
    pathMatch: 'full'
  },
  {
    path: 'worksheet',
    component: WorkSheet
  },
   
  { path: '**', redirectTo: '/404' }



];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
