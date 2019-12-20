import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  newProduct = {title: "", image: ""};
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) {
  }

  ngOnInit(){
  }

  addProduct(){
    var tempObs = this._httpService.postProduct(this.newProduct);
    tempObs.subscribe((data:any)=>{
      // this.error = data.error.errors.title.message;     
      if(!data.error){
        this._router.navigate(["/fishers"]);
      }
    })
  }
}
