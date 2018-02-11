import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WebService } from './../web.service';




@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.css']
})
export class NewFriendComponent  {
  nameCtrl: FormControl;
  gameCtrl: FormControl;
  friendForm: FormGroup;
  

  constructor(fb : FormBuilder, private webService : WebService) {
    this.nameCtrl = fb.control("", [Validators.required, Validators.minLength(3)]);
    this.gameCtrl = fb.control("", [Validators.required, Validators.minLength(3)]);
    this.friendForm = fb.group({
      name : this.nameCtrl,
      game: this.gameCtrl
    });
   }
  
  
  friend = {
    name : "",
    game : ""
  }

  post(){
    this.friend.game = this.gameCtrl.value;
    this.friend.name = this.nameCtrl.value;
    console.log (this.friend.game);
    this.webService.postFriend(this.friend);
  }
}
