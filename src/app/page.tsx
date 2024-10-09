import { getPosts } from '@/utils';
import Link from 'next/link';

async function HomePage() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map(({ title, route, date }, index) => (
        <li
          key={route}
          className={`py-3 ${
            index === 0
              ? 'border-none'
              : 'border-t border-solid border-gray-500'
          }`}
        >
          <Link href={`/posts/${route}`} className="flex justify-between">
            <span>{title}</span>
            <span className="text-sm text-slate-200">{date.toString()}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
