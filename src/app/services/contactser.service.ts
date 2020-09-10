import { Injectable } from '@angular/core';
import {contact} from 'src/app/model/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactserService {

  constructor() { }
  contacts:contact[]=[ {
    "id": 1,
    "name": "mohan",
    "ph_no": 1234567890
  },
  {
    "id": 2,
    "name": "mohit",
    "ph_no": 2222222222
  },
  {
    "id": 3,
    "name": "rohan",
    "ph_no": 3311224455
  }];
  //services-get list of contacts
  getcontacts() {
    return this.contacts;
  }
  addcontact(Id:number,Name:string,phone:number) { 
    alert("contact added successfully");
    let newContact= { 
     id:Id,name:Name, ph_no:phone };
     return this.contacts.push(newContact);  
  }
  deletecontact(value:contact)
  {
    alert("continue to delete..?");
    let index = this.contacts.indexOf(value);
    return this.contacts.splice(index, 1);
  }
  getUserById(id1){
    for(var i in this.contacts){
      if(this.contacts[i].id == id1){
        console.log(this.contacts[i])
        return this.contacts[i];
      }
    }
  }
  updateRecord(id1,name,num1){
    for(var i in this.contacts){
      if(this.contacts[i].id == id1){
        this.contacts[i].id = id1;
        this.contacts[i].name = name;
        this.contacts[i].ph_no = num1;
      
        break;
      }
    }
    alert("Contact Edited Successfully");

  }
}
