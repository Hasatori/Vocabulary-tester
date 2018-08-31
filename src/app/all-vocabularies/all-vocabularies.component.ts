import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-all-vocabularies',
  templateUrl: './all-vocabularies.component.html',
  styleUrls: ['./all-vocabularies.component.css']
})
export class AllVocabulariesComponent implements OnInit {

  allVocabularies: String[];

  constructor(private categoriesService: CategoriesService) {

  }

  ngOnInit() {
    this.getAllVocabularies();
  }

  private getAllVocabularies() {
    this.categoriesService.getAllVocabularies()
      .subscribe((data: string[]) => {
        this.allVocabularies = data;
      });
  }
}
