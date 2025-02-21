import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { License } from '../license';
import { LicenseService } from '../license.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  license: License;
  licenseList: License[] = [];
  totalPages: number;
  pageCounter: number[] = [];
  page: number = 0; //using a signal negatively affected performance, possibly since changing page means new api calls etc.

  constructor(private licenseService: LicenseService) {}

  ngOnInit() {
    this.licenseService.searchLicenceForAll(0).subscribe((res) => {
      this.licenseList = res.elements;
      this.totalPages = res.totalElements / res.elements.length;
      this.setPageCounter();
    });
  }

  selectPage(pageNumber: number) {
    this.licenseService.searchLicenceForAll(pageNumber).subscribe((res) => {
      this.licenseList = res.elements;
    });
  }

  updatePage(pageNumber: number) {
    if (pageNumber >= 0 && pageNumber <= this.totalPages) {
      this.page = pageNumber;
      this.selectPage(this.page);
    }
  }

  setPageCounter() {
    for (let i = 0; i < this.totalPages; i++) {
      this.pageCounter[i] = i;
    }
  }
}
