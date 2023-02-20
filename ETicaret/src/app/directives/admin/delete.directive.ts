import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';


declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef,
    private _render: Renderer2,
    private productService: ProductService) {

    const img = _render.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    img.setAttribute("style", "cursor:pointer;");
    img.wedth = 25;
    img.height = 25;
    _render.appendChild(element.nativeElement, img);

  }

  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener("click")
  async onclick() {


    const td: HTMLTableCellElement = this.element.nativeElement;

    await this.productService.delete(this.id);
    // delete (id, event) {
    //   alert(id)
    //   const img: HTMLImageElement = event.srcElement;

    $(td.parentElement).fadeOut(2000, () => {

      this.callback.emit();

    });

  }



}


