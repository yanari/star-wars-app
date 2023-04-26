import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  ngOnInit() {
    this.modalClasses = {
      'modal': true,
      'is-active': true,
    };
  }
  modalClasses: Record<string, boolean> = {};

  onClick() {
    this.modalClasses = {
      'modal': true,
      'is-active': false,
    };
  }
}
