import countries from '@/app/countries/data.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';


interface ICountryParams {
  params: Promise<{ countryName: string }>
}
export default async function Page({ params }: ICountryParams) {
  const { countryName } = await params

  const country = countries?.countries?.find((country) => country?.name === countryName);

  if (!country) return notFound();

  const citiesList = country?.cities?.map((city) => <li key={city?.id}>
    <Link href={`/countries/${countryName}/city/${city?.name}`}>
      {city?.name}
    </Link>
  </li>);

  return (
    <div>
      <h1>{countryName}</h1>
      <ul>{citiesList}</ul>
    </div>
  )
}
