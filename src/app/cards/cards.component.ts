import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../categories.service';
import {forEach} from '@angular/router/src/utils/collection';
import * as Collections from 'typescript-collections';
import * as $ from 'jquery';
import {Pipe, PipeTransform} from '@angular/core';
import {ArgumentOutOfRangeError} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],

})

export class CardsComponent implements OnInit {

  categoriesTable: Array<Array<Category>>;
  categories: Category[];
  filteredCategories: Array<Category>;
  images:Array<string>;
  columnCount: number;
  // collection: Set<string>;
  private imgCount: number;

  constructor(private categoriesService: CategoriesService) {

  }

  ngOnInit() {

    this.columnCount = 4;
    this.setCategories();
  }

  setCategories() {
    this.categoriesService.getCategories(true)
      .subscribe((data: string[]) => {
        this.categories = new Array<Category>();
        for (let i = 0; i < data.length; i++) {
          //  console.log(data[i]['topic']);
          let cat = new Category(data[i]['topic'], this.getPicture(data[i]['topic']));
          this.categories.push(cat);
          console.log(this.categories.length);
        }
        console.log(this.categories.length);
        this.categoryIntoTable(this.categories, 4);
      });

  }
setPictures(){
  this.categoriesService.getCardImages()
    .subscribe((data: Array<string>) => {
      for (let image in data) {
        console.log(image);
      }
    });
}
  private categoryIntoTable(data: Array<Category>, column: number) {
    let count = 0;
    let row = new Array<Category>();
    this.categoriesTable = new Array<Array<Category>>();
    if (data.length < column) {
      for (let value of data) {
        row.push(value);
      }
      this.categoriesTable.push(row);
    } else {
      for (let value of data) {
        if (count < column) {
          row.push(value);
          console.log(value.name);
          count++;
        } else {
          this.categoriesTable.push(row);
          row = new Array<Category>();
          count = 0;
        }
      }
    }
  }

  getPicture(category:string) {

    let random = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    return '../assets/images/cards/'+category+'.jpg';
  }

  mouseEnter(category: string) {

    var card = $('#' + category);
    var marginVal = '20px';
    try {
      var preceding = card.prev();

      var precedingVal = preceding.text();
      if(precedingVal==""){
        card.find('.myLink .myCard').css('margin-left',"20px");
      }
      this.moveLeft(precedingVal, marginVal);
    } catch (e) {
    }
    try {
      var following = card.next();
      var followingVal = following.text();

      this.moveRight(followingVal, marginVal);
    } catch (e) {

    }

  }

  mouseOf(category: string) {
    var card = $('#' + category);
    card.find('.myLink .myCard').css('margin-left',"0px");
    card.find('.myLink .myCard').css('margin-right',"0px");
    try {
      var preceding = card.prev();
      var marginVal = '0px';
      preceding.find('.myLink .myCard').css('margin-left', marginVal);
      preceding.find('.myLink .myCard').css('margin-right', marginVal);
      var precedingVal = preceding.text();
      this.moveLeft(precedingVal, marginVal);
    } catch (e) {

    }
    try {
      var following = card.next();
      following.find('.myLink .myCard').css('margin-right', marginVal);
      following.find('.myLink .myCard').css('margin-left', marginVal);
      var followingVal = following.text();
      this.moveRight(followingVal, marginVal);
    } catch (e) {

    }
    ;


  }

  private moveLeft(category, marginVal: string) {

    try {
      var card = $('#' + category);
      var preceding = card.prev();
      var precedingVal = preceding.text();
      card.find('.myLink .myCard').css('margin-left', '-' + marginVal);
      card.find('.myLink .myCard').css('margin-right', marginVal);
      this.moveLeft(precedingVal, marginVal);
    } catch (e) {

    }
    ;

  }

  private moveRight(category, marginVal: string) {

    try {
      var card = $('#' + category);
//     card.addClassName('isMoving');
      var following = card.next();
      var followingVal = following.text();
      card.find('.myLink .myCard').css('margin-right', '-' + marginVal);
      card.find('.myLink .myCard').css('margin-left', marginVal);
      this.moveRight(followingVal, marginVal);
    } catch (e) {

    }
    ;
  }

  filterInput() {
    let searchBox = $('#searchCategory');
    let inputValue = searchBox.val().toLowerCase().trim();
    this.filteredCategories = new Array<Category>();
    console.log('------------------------------------------------------------------');
    for (let category of this.categories) {
      if (category.name.toLowerCase().trim().includes(inputValue)) {
        console.log(category.name);
        this.filteredCategories.push(category);
      }
    }
    console.log(this.filteredCategories.length);
    this.categoryIntoTable(this.filteredCategories, this.columnCount);
  }
}

export class Category {
  name: string;
  image: string;

  constructor(name: string, image: string) {
    this.image = image;
    this.name = name;
  }
}
