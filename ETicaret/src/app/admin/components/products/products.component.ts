import { Component, OnInit, ViewChild } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';

import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    // this.httpClientService.get<create_product[]>({
    //   controller: "Products"
    // }).subscribe(data => {

    // });

    // this.httpClientService.post({
    //   controller: "Products"
    // }, {
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.post({
    //   controller: "Products"
    // }, {
    //   name: "Kağıt",
    //   stock: 1000,
    //   price: 5
    // }).subscribe();

    // this.httpClientService.post({
    //   controller: "Products"
    // }, {
    //   name: "Silgi",
    //   stock: 50,
    //   price: 2.50
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "Products"
    // }, {
    //   id: "47f360ff-3be9-4fd3-9ec5-86be98b55988",
    //   name: "renkli Silgi",
    //   stock: 1000,
    //   price: 5
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "Products"
    // },
    //   "47f360ff-3be9-4fd3-9ec5-86be98b55988")

    //   .subscribe();
  }

  @ViewChild(ListComponent) listComponents: ListComponent;

  createdProduct(createdProduct: Create_Product) {
    this.listComponents.getProducts();
  }

}
