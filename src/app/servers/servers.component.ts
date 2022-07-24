import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

   user = false;
  // serverStatus = false;
  // noOfServers = ['Tst Server', 'Tst Server 2'];
  loggingInputs:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
//   onCreateServer() {
//     this.noOfServers.push(this.userInput);
// this.serverStatus = true;
// this.userInput = "Server was created and the server name is " + this.userInput;

//   }
  
onDisplayDetails() {
  // this.loggingInputs.push(this.userInput);
  this.user = !this.user;
  console.log("event" + this.loggingInputs.length);
  // this.loggingInputs.push(this.loggingInputs.length + 1);
  this.loggingInputs.push(new Date());
}
}
