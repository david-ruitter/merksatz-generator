import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'keyword-input',
  templateUrl: './keyword-input.component.html',
  styleUrls: ['./keyword-input.component.scss']
})
export class KeywordInputComponent {

  @Output() keywordAdded = new EventEmitter<string>();
  keyword: FormControl = new FormControl('');

  handleKeyUp(e: { keyCode: number; }) {
    if (e.keyCode === 13) {
      this.addKeyword();
    }
  }

  addKeyword(): void {
    const value: string = this.keyword.value as string;
    if (value === '') {
      return;
    }
    this.keywordAdded.emit(this.keyword.value);
    this.keyword.reset();
    this.keyword.setValue('');
  }

}
