import { NgModule } from '@angular/core'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider'

const modules = [MatBadgeModule, MatButtonModule, MatSliderModule]
@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
