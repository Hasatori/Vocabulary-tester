import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  categoriesUrl = 'http://localhost/CreateDictionary/backend/getCat.php';
  vocabulariesUrl = 'http://localhost/CreateDictionary/backend/getVoc.php';
  allVocabularies = 'http://localhost:8000/allEnglishVocabularies';
  greeting = 'http://localhost:8000/greeting';

  getCategories(sort: boolean) {
    return this.http.get(this.categoriesUrl + '?sort=' + sort);
  }

  getCategoryVocabularies(category: string) {
    return this.http.get(this.vocabulariesUrl + '?category=' + category);
  }

  getAllVocabularies() {
    return this.http.get(this.allVocabularies);
  }
  getGreeting(){
    return this.http.get(this.getGreeting());
  }
}
