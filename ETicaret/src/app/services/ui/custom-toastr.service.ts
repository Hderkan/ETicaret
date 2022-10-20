import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Position } from '../admin/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string , title: string ,toastrOptions:Partial<ToastrOptions>) {
    this.toastr[toastrOptions.massageType](message,title,{
      positionClass: toastrOptions.positionClass
    });

  }
}

export class ToastrOptions {
  massageType: ToastrMessageType;
  positionClass:ToastrPosition
}

export enum ToastrMessageType
{
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error ="error"
}
export enum ToastrPosition{
TopRight = "toast-top-right",
BottomRight = "toast-bottom-right",
BottomLeft= "toast-top-left",
TopLeft= "toast-top-right",
TopFullWidth= "toast-top-full-width",
BottomFullWidth= "toast-bottom--full-width",
TopCenter= "toast-top-center",
BottomCenter= "toast-bottom-center",
}
