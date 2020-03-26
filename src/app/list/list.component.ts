import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }
products = []
  ngOnInit() {
    this.http.get("http://iilinov-n.myjino.ru/products")
    .subscribe( (products: any[])=>{
      console.log(products)
      this.products = products
    })
  }

}
