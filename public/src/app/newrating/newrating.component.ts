import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newrating',
  templateUrl: './newrating.component.html',
  styleUrls: ['./newrating.component.scss']
})
export class NewratingComponent implements OnInit {
  newRating = { rating: "", comment: "", name: "" };
  selectedProduct: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findProduct();
  }

  findProduct(){
    console.log("~Component: findProduct() initialzed~")
    this._route.params.subscribe((params)=>{
    console.log("~ID:", params["id"])
      let tempObs = this._httpService.getOneProduct(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.selectedProduct = data;
        console.log("~Component: selectedProduct response~", this.selectedProduct)
      })
    })
  }

  addRating(Id){
    console.log(Id);
    let observable = this._httpService.addNewRating(this.newRating, Id);
    observable.subscribe(data => {
      console.log("~Create Comment~");
    })
    this.newRating = { rating: "", comment: "", name: "" }
    this._router.navigate([`/products/reviews/${Id}`]);
  }

}

