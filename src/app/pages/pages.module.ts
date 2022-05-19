import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RoutingModule],
})
export class PagesModule {}
