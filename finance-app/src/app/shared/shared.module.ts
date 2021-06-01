import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from './components/shared-components.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    ServicesModule
  ],
})
export class SharedModule { }