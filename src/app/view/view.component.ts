import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


type Product = {
  title: string,
  desc: string,
  price: string,
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }
product:Product = {
  title: "",
  desc: "",
  price: "",
}
  ngOnInit() {
    this.http.get("http://iilinov-n.myjino.ru/products/"+ this.route.snapshot.paramMap.get("id"))
    .subscribe( (product: Product)=>{
      this.product = product
      


    })
  }

}