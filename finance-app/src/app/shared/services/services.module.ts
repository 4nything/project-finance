import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainServiceService } from './common-services/main-service.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    MainServiceService,
    AuthService
  ]
})
export class ServicesModule { }