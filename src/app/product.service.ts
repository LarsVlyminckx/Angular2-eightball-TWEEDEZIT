import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Product } from './product';

@Injectable()
export class ProductService {

   private productsServiceURI: string = 'http://localhost:4000';
    private names:string[] = new Array("It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.",
            "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy", "try again", "Ask again later.", "Better not tell you now.",
            "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no",
            "Outlook not so good.", "Very doubtful.") 


   constructor(private http: HttpClient) {}


   // get a product based on the name
   searchProduct(name: string): Observable<any> {
      let url = `${this.productsServiceURI}/search`;

      return this.http.post(url, `name=${name}`,
                    {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
   }
}
