import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [RickAndMortyService]
})
export class SharedModule { }
