import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

interface contact{
  name:string;
  email:string;
  timestamp: any;
  information:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts:Array<contact> = [];

  name:string = "";
  email:string = "";
  information:string = "";
  id: string = "";

  constructor( private db: AngularFirestore ) {
    this.db.collection<contact>('/contactCollection').valueChanges().subscribe(res => {
      this.contacts = res;
    });
  }

  // https://medium.com/slackernoon/crud-cheatsheet-for-firebase-and-angular-4846fce54e5a
  storeContact(){
    this.db.collection("contactCollection").doc<contact>(this.id).set({
      name: this.name,
      timestamp: new Date(),
      email: this.email,
      information: this.information
    })
    console.log("store working!")

    this.id = "";
    this.name = "";
    this.email = "";
    this.information = "";
  }

  deleteContact() {
    this.db.collection("contactCollection").doc<contact>(this.id).delete();
  }

  ngOnInit(): void {
  }

}
