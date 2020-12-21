import { SearchHits } from './../../models/search-results-hits';

import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector   : 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls  : ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: SearchHits;  // List of search results to pretty present.

  constructor() { }

  ngOnInit() {

    console.log('​SearchResultsComponent:: ngOnInit() -> searchResults', this.searchResults);
  }

}
