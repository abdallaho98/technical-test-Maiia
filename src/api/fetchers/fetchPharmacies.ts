import { PharmacyJson, pharmacyMapper } from '../../mappers/PharmacyMapper';
import { apiHost, ApiRoutes } from '../routes';
import { Pharmacy } from '../../models/Pharmacy';

async function fetchPharmacies(
  limit: number = 500,
  locality: string = '75001-PARIS',
  page: number = 0,
  specialty: string = 'pharmacie',
) {
  const url = `${apiHost}${ApiRoutes.GET_PHARMACIES}?limit=${limit}&locality=${locality}&page=${page}&speciality.shortName=${specialty}`;
  const res = await fetch(`${url}`, {
    method: 'GET',
  });

  if (res.ok) {
    const content = await res.json();
    const mappedJson: Pharmacy[] = content.items.map((item: PharmacyJson) =>
      pharmacyMapper(item),
    );
    return mappedJson as Pharmacy[];
  }
  return {} as Pharmacy[];
}

export default fetchPharmacies;
