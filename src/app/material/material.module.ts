import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Material
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    // Material
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
