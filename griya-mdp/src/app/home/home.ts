import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LokasiPerumahan } from '../lokasi-perumahan/lokasi-perumahan'; 
import { Housing } from '../lokasi-perumahan/housing.model';
import { CommonModule } from '@angular/common';
import { HOUSING_DATA } from '../data/housing-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LokasiPerumahan, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  housingList: Housing[] = HOUSING_DATA;

  filteredList: Housing[] = [];
  selectedFilter: string = 'all';

  ngOnInit() {
    this.filteredList = [...this.housingList];
  }

  filterByType(type: string) {
    this.selectedFilter = type;
    this.filteredList =
      type === 'all'
        ? [...this.housingList]
        : this.housingList.filter(h => h.type === type);
  }

  isFilterActive(type: string): boolean {
    return this.selectedFilter === type;
  }
}
