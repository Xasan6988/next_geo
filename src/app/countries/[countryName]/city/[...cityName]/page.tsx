import data from '@/app/countries/data.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ICityParams {
  params: Promise<{ cityName: string, countryName: string }>
}

export default async function City({ params }: ICityParams) {
  const { cityName, countryName } = await params;

  const city = data?.countries
    ?.find((country) => country?.name === decodeURIComponent(countryName))
    ?.cities?.find((city) => city?.name === decodeURIComponent(cityName));

  if (!city) return notFound();

  const { area, name, population, yearFounded } = city

  return (
    <div>
      <h2>{name}</h2>
      <p>Founded: {yearFounded}</p>
      <p>Population: {population}</p>
      <p>Area: {area}</p>


      <Link href={`/countries/${countryName}`}>Back to country</Link>
    </div>
  )
}
