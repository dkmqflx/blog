import { readFile } from 'fs/promises';
import path from 'path';
import { Post } from '@/types';

export const getPosts = async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};
