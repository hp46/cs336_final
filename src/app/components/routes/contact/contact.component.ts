import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Create contact interface
interface contact{
  name:string;
  phoneNumber:string;
  email: string;
  timestamp: any;
  information:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Receives value from the firebase DB
  contacts:Array<contact> = [];

  name:string = "";
  email:string = "";
  information:string = "";
  phoneNumber: string = "";

  // Retrieve contact data from the firestore DB
  // This information is not used in the project, but it could be used to see the entire contact list
  constructor( private db: AngularFirestore ) {
    this.db.collection<contact>('/contactCollection').valueChanges().subscribe(res => {
      this.contacts = res;
    });
  }

  // https://medium.com/slackernoon/crud-cheatsheet-for-firebase-and-angular-4846fce54e5a
  // Push contact information into the firestore DB
  storeContact(){
    this.db.collection("contactCollection").doc<contact>(this.name).set({
      name: this.name,
      timestamp: new Date(),
      email: this.email,
      information: this.information,
      phoneNumber: this.phoneNumber
    })
    console.log("store working!")

    // Resets all the field value
    this.phoneNumber = "";
    this.name = "";
    this.email = "";
    this.information = "";
  }

  // Allow user to delete contact by entering their name
  deleteContact() {
    this.db.collection("contactCollection").doc<contact>(this.name).delete();
  }

  ngOnInit(): void {
  }

}
