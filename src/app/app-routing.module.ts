import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import {DeparmentComponent} from './deparment/deparment.component';
import { SplintershardsComponent } from './splintershards/splintershards.component';
import { DarkcrystalComponent } from './darkcrystal/darkcrystal.component';
import { CaptureRateComponent } from './capture-rate/capture-rate.component';
import { AxieComponent } from './axie/axie.component';
import { PexelComponent } from './pexel/pexel.component';

const routes: Routes = [
{path: 'employee', component:EmployeeComponent},
{path: 'department', component:DeparmentComponent},
{path: 'splinteshards', component:SplintershardsComponent},
{path: 'dec', component:DarkcrystalComponent},
{path: 'shiba', component:CaptureRateComponent},
{path: 'slp', component:AxieComponent},
{path: 'pexel', component:PexelComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
