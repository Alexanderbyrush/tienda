import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  name: String;
  price: String;
  unit: string;


  constructor(private route:ActivatedRoute) { 
    this.name = '';
    this.price = '0';
    this.unit = '0';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
      this.name = params.name
      this.price = params.price
      this.unit = params.unit
    })
  }

}
 