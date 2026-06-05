import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  imports: [CommonModule],
  templateUrl: './pop-up.html',
  styleUrl: './pop-up.css',
})
export class PopUp {
  @Input() isOpen = false;
  @Output() closePopUp = new EventEmitter<void>();

  cerrar() {
    this.closePopUp.emit();
  }
}
