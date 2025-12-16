import data from '@/app/countries/data.json';
import Link from 'next/link';

export default function Countries() {

  const countriesList = data?.countries?.map((country) => <li key={country?.id}><Link href={`/countries/${country?.name}`}>{country?.name}</Link></li>);


  return (
    <div>
      <h2>Countries</h2>

      <ul>{countriesList}</ul>

      <Link href="/">Home</Link>
    </div>

  )
}
