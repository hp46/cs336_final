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
  contacts:Array<contact>

  name:string;
  email:string;
  information:string;

  constructor( private db: AngularFirestore ) {
    this.db.collection<contact>('/contactCollection').valueChanges().subscribe(res => {
      this.contacts = res;
    });
  }

  storeContact(){
    let randomID:string = Math.random().toString(36).substring(7)
    this.db.doc<contact>(`/contactCollection/${randomID}`).set({
      name: this.name,
      timestamp: new Date(),
      email: this.email,
      information: this.information
    })
    console.log("store working!")

    this.name = "";
    this.email = "";
    this.information = "";
  }

  ngOnInit(): void {
  }

}
