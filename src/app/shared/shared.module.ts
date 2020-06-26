import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrayComponent } from './components/tray/tray.component';



@NgModule({
  declarations: [TrayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TrayComponent
  ]
})
export class SharedModule { }
