export type LicenseType = 'MSP-SUB' | 'MSP' | 'STD' | 'SPS';

export interface License {
  blocked: boolean;
  customerId: string;
  customerMailAddress: string;
  customerName: string;
  id: number;
  licenseCategory: 'USER' | 'DOMAIN';
  licenseKey: string;
  licenseType: LicenseType;
  numberOfUsersLicensed: number;
  parent: {
    customerName: string;
    licenseKey: string;
  };
  parentKey: string;
  pollHistory: {
    activeUserCount: number;
    hostname: string;
    version: number;
  };
  renewalStatus: 'CANCELLED' | 'MIGRATION';
  validFrom: string;
  validUntil: string;
}

export function getLicenseTypes(): LicenseType[] {
  return ['MSP-SUB', 'MSP', 'STD', 'SPS'];
}
