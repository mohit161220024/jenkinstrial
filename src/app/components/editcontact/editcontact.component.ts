import { Component, OnInit } from '@angular/core';
import {contact} from 'src/app/model/contact';
import {ContactserService} from 'src/app/services/contactser.service'
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  userDetails:contact;
  id:any;
  constructor(private route:ActivatedRoute,private conservice: ContactserService,private _router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('Id');
   this.userDetails = this.conservice.getUserById(this.id);
  console.log(this.userDetails);
  }
  updateRecord(id,name,num){
    this.conservice.updateRecord(this.id,name,num);
  }

}
