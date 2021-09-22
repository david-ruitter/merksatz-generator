import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'keyword-badge',
  templateUrl: './keyword-badge.component.html',
  styleUrls: ['./keyword-badge.component.scss']
})
export class KeywordBadgeComponent {

  @Output() deleteKeyword: EventEmitter<number> = new EventEmitter<number>();
  @Input() keyword: string = '';
  @Input() index: number = 0;

  deleteKeywordHandler() {
    this.deleteKeyword.emit(this.index);
  }

}
