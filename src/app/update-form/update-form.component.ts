import { Component, OnInit, inject } from '@angular/core';
import { LicenseService } from '../license.service';
import { License, getLicenseTypes } from '../license';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  imports: [FormsModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css',
})
export class UpdateFormComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  licenseTypes: string[] = getLicenseTypes();
  license: License = {
    blocked: true,
    customerId: '',
    customerMailAddress: '',
    customerName: '',
    id: 0,
    licenseCategory: 'USER',
    licenseKey: '',
    licenseType: 'STD',
    numberOfUsersLicensed: 0,
    parent: {
      customerName: '',
      licenseKey: '',
    },
    parentKey: '',
    pollHistory: {
      activeUserCount: 0,
      hostname: '',
      version: 0,
    },
    renewalStatus: 'CANCELLED',
    validFrom: '',
    validUntil: '',
  };

  constructor(private licenseService: LicenseService, private router: Router) {}

  ngOnInit(): void {
    // Some kind of loading handling for this so page doesn't display the default values in this.license first
    const licenseId = this.route.snapshot.params['id'];
    this.licenseService.getLicenseById(licenseId).subscribe((res: License) => {
      this.license = res;
    });
  }

  updateLicense() {
    this.licenseService
      .updateLicense(
        this.license.id,
        this.license.customerName,
        this.license.customerMailAddress,
        this.license.licenseType,
        this.license.validUntil
      )
      .subscribe((res) => {
        console.log(`Response status: ${res.status}`);
      });

    this.router.navigate(['']);
  }
}
