import type { DetailsLoaderResult } from './detailsLoader';
import { useLoaderData } from 'react-router-dom';

function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold my-4">{details.name}</h1>

          <div>
            <h2 className="text-lg font-bold">Description</h2>
            <div className="p-3 bg-gray-200 rounded">{details.description}</div>
          </div>

          <div>
            <h2 className="text-lg font-bold">License</h2>
            <div className="p-3 bg-gray-200 rounded">{details.license}</div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Author</h2>
            <div className="p-3 bg-gray-200 rounded">
              {details.author?.name}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailsPage;
