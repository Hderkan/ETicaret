import { Component } from '@angular/core';
import { MessageType, Position } from './services/admin/alertify.service';

import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaret';
constructor(private toastrService: CustomToastrService) {
  toastrService.message("Merhaba", "oktay", {
  massageType :  ToastrMessageType.Info,
  positionClass: ToastrPosition.TopCenter
});



  }
}



