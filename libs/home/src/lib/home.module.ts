import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AuthLoginModule} from 'libs/auth/login/src';
import {LoginRoutingModule} from './home-routing.module';

@NgModule({
  imports: [CommonModule, AuthLoginModule, LoginRoutingModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent, HeaderComponent, FooterComponent],
})
export class HomeModule {}
