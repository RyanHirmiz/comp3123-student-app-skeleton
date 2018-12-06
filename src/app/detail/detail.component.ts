import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
  
})
export class DetailComponent implements OnInit 
{

  public detailList;
  public itemId: string;

  constructor(private route: ActivatedRoute, public service: AppService) 
  {
    this.itemId= this.route.snapshot.paramMap.get('id');
    this.detailList = this.service.getOneItem(this.itemId);

  }

  ngOnInit() 
  {
  
  }

}
