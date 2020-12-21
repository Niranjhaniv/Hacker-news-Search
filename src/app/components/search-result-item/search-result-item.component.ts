
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SearchResultTopical } from '../../models/search-result-topic';

@Component({
  selector   : 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls  : ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
  @Input () searchResultItem: SearchResultTopical;                            // can intercept input get pty
  @Output() clickChange     : EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    
  }

  onClick(event: MouseEvent) {

    this.clickChange.emit(event);
    return event;
  }
}
