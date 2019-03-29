import { Component, OnInit } from '@angular/core';
import { NetmessagesService } from '../netmessages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

	private msg: String[];

  constructor( private msgService: NetmessagesService ) { }

  ngOnInit() {
  	this.getMessages();
  }
  
  getMessages() {
  	this.msgService.getMessages().subscribe(messages => this.msg = messages);
  }

}
