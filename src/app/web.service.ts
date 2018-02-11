import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:63145/api';

    friends = [];

    constructor(private http: Http, private sb : MatSnackBar) {
        this.getFriends();
    }

    async getFriends(){
        try {
            var response = await this.http.get(this.BASE_URL + '/friends').toPromise();
            this.friends = response.json();
        } catch (error) {
            this.handleError("Unable to get friends");
        }

    }

    async postFriend(friend){
        try {
            var response =  await this.http.post(this.BASE_URL + '/friends', friend).toPromise();
            this.friends.push(response);
        } catch (error) {
            this.handleError("Unable to post friend");
        }

    }

    private handleError (error){
        console.error(error);
        this.sb.open(error, 'close', {duration: 2000} );
    }
}