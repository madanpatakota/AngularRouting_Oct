

import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class userService{
    usernameEmitter = new EventEmitter<string>();
    //emit and subscribe
}