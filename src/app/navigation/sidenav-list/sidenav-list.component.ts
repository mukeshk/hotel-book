import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
  constructor() {}

  @Output() closeSideNavigation = new EventEmitter()

  ngOnInit(): void {}

  onToggleClose() {
    this.closeSideNavigation.emit()
  }
}
