import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../categories.service';
import {Category} from '../cards/cards.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public categoryName: string;
  public vocabularies: string[];
  public filteredVocabularies: string[];

  constructor(private categoriesService: CategoriesService) {

  }

  ngOnInit() {
    this.categoryName = document.location.hash.replace('#', '');
    this.getVocabularies();
  }

  private getVocabularies() {
    this.categoriesService.getCategoryVocabularies(this.categoryName)
      .subscribe((data: Array<string>) => {
        this.vocabularies = data;
        this.filteredVocabularies = data;
      });

  }

  public filterInput() {
    let searchBox = $('#searchVocabulary');
    let inputValue = searchBox.val().toLowerCase().trim();
    this.filteredVocabularies = new Array<string>();
    console.log('------------------------------------------------------------------');
    for (let vocabulary of this.vocabularies) {
      if (vocabulary['english_value'].toLowerCase().trim().includes(inputValue)) {
        this.filteredVocabularies.push(vocabulary);
      }
    }
  }
}
