import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyOptions, AlertifyService } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductService, private alertifyService: AlertifyService) { }




  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async ngOnInit() {



    const allProducts: List_Product[] = await this.productService.read(
    )

    this.dataSource = new MatTableDataSource<List_Product>(allProducts);
    this.dataSource.paginator = this.paginator;
  }

}
