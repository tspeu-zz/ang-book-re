import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categorias: any = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getAll();
    this.getCategories();
  }

  getCategories() {

    this.categoriesService.getConfig()
    .subscribe(data => this.categorias = {...data });

    console.log('ESTAS DATAS SON CATEGORIAS', this.categorias);
  }

  getAll() {
    this.categoriesService.getAllResponse().subscribe(resp => {
      console.log('es esrp--->', resp.body);
      this.categorias = Object.assign([], resp.body) ;
      console.log('es this.categorias--->', this.categorias);
    });

  }



}
