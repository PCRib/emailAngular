import { MailList } from './../../models/MailList';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maillist',
  templateUrl: './maillist.component.html',
  styleUrls: ['./maillist.component.scss']
})
export class MaillistComponent implements OnInit {


  maillist: MailList[];
  constructor() { }

  ngOnInit() {
    this.maillist = [
      {
        id: 0,
        date: '02/03/14',
        sender: 'Cority',
        message: 'Good job on this portion',
        isClicked: false,
        newItem: true
      },
      {
        id: 1,
        date: '02/03/14',
        sender: 'Rangle',
        message: 'We helped create parts of angular, use or dev extension',
        isClicked: false,
        newItem: true
      },
      {
        id: 2,
        date: '02/03/14',
        sender: 'BrainStation',
        message: 'Welcome to or state of the art education station',
        isClicked: false,
        newItem: true
      },
      {
        id: 3,
        date: '02/03/14',
        sender: 'Tyrion',
        message: 'I am the hand, or the one true Queen',
        isClicked: false,
        newItem: false
      },
      {
        id: 4,
        date: '02/03/14',
        sender: 'Andre Small',
        message: 'Great work last week, look forward to the coming ones',
        isClicked: false,
        newItem: false
      },
      {
        id: 5,
        date: '02/03/14',
        sender: 'Postmates',
        message: 'Join us now, We have an exclusive offer for you!',
        isClicked: false,
        newItem: false
      }
    ];
  }
  newEmails() {
    const arr = this.maillist.filter((m) => m.newItem === true);
    return arr.length;
  }
  deleteMail(maillist: MailList) {
    this.maillist = this.maillist.filter(mail => mail.id !== maillist.id);
  }

}
