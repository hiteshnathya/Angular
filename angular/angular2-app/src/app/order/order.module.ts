import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerorderComponent } from './customerorder/customerorder.component';



@NgModule({
  declarations: [CustomerorderComponent],
  imports: [ CommonModule],
  exports:[CustomerorderComponent],
})
export class OrderModule { }
