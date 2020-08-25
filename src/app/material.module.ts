import { NgModule } from '@angular/core'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar'

const modules = [
  MatBadgeModule,
  MatButtonModule,
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
]
@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
