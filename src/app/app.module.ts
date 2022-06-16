import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeparmentComponent } from './deparment/deparment.component';
import { ShowDepComponent } from './deparment/show-dep/show-dep.component';
import { AddEditDepComponent } from './deparment/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import {SharedService} from './shared.service';




import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SplintershardsComponent } from './splintershards/splintershards.component';
import { ShowSpsComponent } from './splintershards/show-sps/show-sps.component';
import { AddEditSpsComponent } from './splintershards/add-edit-sps/add-edit-sps.component';
import { DarkcrystalComponent } from './darkcrystal/darkcrystal.component';
import { ShowDecComponent } from './darkcrystal/show-dec/show-dec.component';
import { AddEditDecComponent } from './darkcrystal/add-edit-dec/add-edit-dec.component';
import { CaptureRateComponent } from './capture-rate/capture-rate.component';
import { AxieComponent } from './axie/axie.component';
import { PexelComponent } from './pexel/pexel.component';

@NgModule({
  declarations: [
    AppComponent,
    DeparmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    SplintershardsComponent,
    ShowSpsComponent,
    AddEditSpsComponent,
    DarkcrystalComponent,
    ShowDecComponent,
    AddEditDecComponent,
    CaptureRateComponent,
    AxieComponent,
    PexelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
