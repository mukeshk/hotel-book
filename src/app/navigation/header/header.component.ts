import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Output() SideNavigationToggle = new EventEmitter()

  ngOnInit(): void {}

  onToggleOpenSideNav() {
    this.SideNavigationToggle.emit()
  }
}
