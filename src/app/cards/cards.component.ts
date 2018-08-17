import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../categories.service';
import {forEach} from '@angular/router/src/utils/collection';
import * as Collections from 'typescript-collections';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  categories: string[][];
 // collection: Set<string>;
  private imgCount: number;

  constructor(private categoriesService: CategoriesService) {

  }

  ngOnInit() {
    this.categories = new Array<Array<string>>();
   // this.collection = new Set<string>();
    this.showCategories(4);
  }

  showCategories(colnum: number) {
    this.categoriesService.getCategories(true)
      .subscribe((data: string[]) => {
        let count = 0;
        let keys = data.keys();
        for (let i = 0; i < data.length; i++) {
         // this.collection.add(data[i]['topic']);
          let row = new Array();
          while (count < colnum) {
            row.push(data[i]['topic']);
            console.log('index: ' + i + ' ' + data[i]['topic']);
            count++;
            i++;

          }
          console.log('-------' + row[0] + '----------');
          this.categories.push(row);
          count = 0;

        }

      });
  }

  getRandomPicture() {
    let random = Math.floor(Math.random() * (60 - 1 + 1) + 1);
    return 'https://mdbootstrap.com/img/Photos/Others/images/' + random + '.jpg';
  }
}
