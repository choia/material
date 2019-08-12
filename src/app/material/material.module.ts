import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Material
    MatMenuModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    // Material
    MatMenuModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
