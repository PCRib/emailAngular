import { MailList } from "./../../models/MailList";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-mailitem",
  templateUrl: "./mailitem.component.html",
  styleUrls: ["./mailitem.component.scss"]
})
export class MailitemComponent implements OnInit {
  @Input() mail: MailList;
  @Output() deleteMail: EventEmitter<MailList> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  openOptions(mail) {
    mail.isClicked = !mail.isClicked;
    mail.newItem = false;
  }
  setClasses() {
    const classes = {
      isClicked: this.mail.isClicked,
      unClicked: !this.mail.isClicked,
      newItem: this.mail.newItem
    };
    return classes;
  }
  deletedMail(mail) {
    this.deleteMail.emit(mail);
  }
  formatDate() {
    const newDate = new Date();
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthNumber = newDate.getMonth();
    const dayNumber = newDate.getDay();
    const dateNumber = newDate.getDate();
    const yearNumber = newDate.getFullYear();
    const formattedDate = `${days[dayNumber]} ${months[monthNumber]} ${dateNumber} ${yearNumber}`;
    return formattedDate;
  }
  shortenMsg(msg) {
    const strLength = msg.length;
    const end = '...';
    const length = 50;
    if (strLength > length) {
      const shorten = msg.substring(0, length) + end;
      return shorten;
    } else {
      return msg;
    }
  }
}
