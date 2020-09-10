import { Component, OnInit } from '@angular/core';
import {contact} from 'src/app/model/contact';
import {ContactserService} from 'src/app/services/contactser.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private conservice:ContactserService,private _router: Router) { }

  ngOnInit(): void {}
  addcontact(Id:number,Name: string, phone: number) {
    this.conservice.addcontact(Id,Name,phone);
  }
  backtohome()
  {
    this._router.navigate(['']);
  }
}
