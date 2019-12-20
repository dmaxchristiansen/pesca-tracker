import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listratings',
  templateUrl: './listratings.component.html',
  styleUrls: ['./listratings.component.scss']
})
export class ListratingsComponent implements OnInit {
  selectedProduct: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findProduct();
  }

  findProduct(){
    this._route.params.subscribe((params)=>{
      let tempObs = this._httpService.getOneProduct(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.selectedProduct = data;
      })
    })
  }

}
