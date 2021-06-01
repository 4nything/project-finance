import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPanelModule } from './config-panel/config-panel.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ConfigPanelModule,
    SidebarModule
  ]
})
export class SharedComponentModule { }