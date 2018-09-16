import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../services/categories/categories.service';
import {Category} from '../cards/cards.component';
import * as $ from 'jquery';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public categoryName: string;
  public vocabularies: string[];
  public filteredVocabularies: string[];

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoryName = params['categoryName'] || '';
    });
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
