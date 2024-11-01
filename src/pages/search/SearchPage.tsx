import type { SearchLoaderResult } from './searchLoader';
import { useLoaderData } from 'react-router-dom';
import PackageListItem from '../../components/PackageListItem';

function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  console.log(searchResults);

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem key={result.name} pack={result} />;
  });

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-2xl font-bold my-6">Search Results</h1>
        <div className="space-y-4 mt-4">{renderedResults}</div>
      </div>
    </main>
  );
}

export default SearchPage;
