import { Pharmacy } from '../models/Pharmacy';
import { apiImages } from '../api/routes';
import { defaultPharmacyPic } from '../../constants/doc';

export type PharmacyJson = {
  [key: string]: any;
};

const pharmacyMapper = (
  data: PharmacyJson | undefined,
): Pharmacy | undefined => {
  if (data && data.id && data.center && data.center.name) {
    return {
      id: data.id,
      name: data.center.name,
      address: data.publicInformation.address.fullAddress,
      image:
        data.publicInformation.mainPicture &&
        data.publicInformation.mainPicture.thumbnailS3Id
          ? apiImages + data.publicInformation.mainPicture.thumbnailS3Id
          : defaultPharmacyPic,
    };
  }
  return undefined;
};

export { pharmacyMapper };
