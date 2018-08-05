import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  categoriesUrl="https://localhost/CreateDictionary/backend/getVoc.php";

  getCategories(){
    return this.http.get(this.categoriesUrl);
  }
}
