import { Component, OnInit } from '@angular/core';
import {contact} from 'src/app/model/contact';
import {ContactserService} from 'src/app/services/contactser.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  contacts:contact[]=[];
  term:string;
  constructor(private conservice:ContactserService,private _router: Router) { }

  ngOnInit(): void {
    this.contacts=this.conservice.getcontacts();
  }
  createcont()
  {
    this._router.navigate(['add']);
  }
  deleteContact(value:contact)
{
  this.conservice.deletecontact(value);
}
editContact(Id:number)
{
  this._router.navigate(['edit',Id]);
}
}
