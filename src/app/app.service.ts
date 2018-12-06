import { Injectable } from '@angular/core';

const FAKE_DB: any[] = 
[
  { id: 1, title: 'Lord of the Rings', genre: 'Fantasy'},
  { id: 2, title: 'Scream', genre: 'Horror'},
  { id: 3, title: 'Star Wars', genre: 'Fiction'},  
  { id: 4, title: 'Avatar (2009)', genre: 'Adventure'}  
];

@Injectable
({
  providedIn: 'root'
})

export class AppService 
{

  constructor()
  { 

  }
  getList()
  {
    return FAKE_DB;
  }

  getOneItem(itemId)
  {
    return FAKE_DB.find(row => row.id === +itemId);
  }


}
