import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editProduct: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findProduct();
    this.editProduct = {catchDate: ""};
  }

  findProduct(){
    this._route.params.subscribe((params)=>{
      let tempObs = this._httpService.getOneProduct(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.editProduct = data;
        console.log(data);
      })
    })
  }

  editSubmit(){
    this._route.params.subscribe((params)=>{
      let tempObs = this._httpService.editProduct(params['id'], this.editProduct);
      tempObs.subscribe((data:any) => {
          this._router.navigate(["/fishers"]);
      })
    })
  }

  deleteProduct(id:string){
    console.log("~Component: deleteProduct() initialzed~")
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data=>{
      this._router.navigate(["/fishers"]);
    })
  }

}