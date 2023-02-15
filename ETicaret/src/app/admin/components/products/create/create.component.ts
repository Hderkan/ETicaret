import { Component, OnInit } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private productService: ProductService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {

    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    if (!name.value) {
      this.alertify.message("Lütfen ürün adını giriniz", {
        dismissOther: true,
        messageType: MessageType.Error,
        position: Position.TopLeft
      });
      return;
    }

    if (parseInt(stock.value) < 0) {
      this.alertify.message("Stock bilgisini girin", {
        dismissOther: true,
        messageType: MessageType.Error,
        position: Position.TopLeft
      });
      return;

    }


    this.productService.create(create_product, () => {

      this.alertify.message("Ürin basarıyla eklenmiştir", {
        dismissOther: true,
        messageType: MessageType.Success,
        position: Position.TopLeft


      });
    }, errorMessage => {
      this.alertify.message(errorMessage,
        {
          dismissOther: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
    });
  }

}
