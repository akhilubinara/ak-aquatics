import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule, PagesRoutingModule],
  exports: [RouterModule]
})

export class PagesModule { }