import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AddcontactComponent} from './components/addcontact/addcontact.component'
import {EditcontactComponent} from './components/editcontact/editcontact.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddcontactComponent},
  {path:'edit/:Id',component:EditcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
