import blockContent from './lib/blog-schemas/blockContent';
import category from './lib/blog-schemas/category';
import post from './lib/blog-schemas/post';
import author from './lib/blog-schemas/author';
import settings from './lib/blog-schemas/settings';
import experience from './lib/blog-schemas/experience';

export * from './lib/blog-types';
export const schemaTypes = [post, author, category, settings, blockContent, experience]