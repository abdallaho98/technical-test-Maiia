import { Pharmacy } from '../models/Pharmacy';
import { apiImages } from '../api/routes';
import { defaultPharmacyPic } from '../../constants/doc';
import { scheduleMapper } from './ScheduleMapper';

export type PharmacyJson = {
  [key: string]: any;
};

const pharmacyMapper = (
  data: PharmacyJson | undefined,
): Pharmacy | undefined => {
  if (data && data.id && data.center && data.center.name) {
    const specialties = data.publicInformation.expertises
      ? data.publicInformation.expertises.map(
          (expertise: PharmacyJson) => expertise.name,
        )
      : [];
    return {
      id: data.id,
      name: data.center.name,
      address: data.publicInformation.address.fullAddress,
      image:
        data.publicInformation.mainPicture &&
        data.publicInformation.mainPicture.thumbnailS3Id
          ? apiImages + data.publicInformation.mainPicture.thumbnailS3Id
          : defaultPharmacyPic,
      specialties: specialties,
      schedule: scheduleMapper(
        data.publicInformation.officeInformation.openingSchedules,
      ),
    };
  }
  return undefined;
};

export { pharmacyMapper };
