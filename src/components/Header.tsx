import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

function Header() {
  return (
    <header>
      <div className="max-w-screen-xl mx-auto px-4 h-14 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-lg font-bold">
            NPM Registry
          </Link>
        </div>
        <div className="w-full max-w-xl ml-4">
          <SearchInput />
        </div>
      </div>
    </header>
  );
}

export default Header;
