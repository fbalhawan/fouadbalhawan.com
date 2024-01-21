type Asset = {
  _ref: string;
  _type: string;
};

type Upload = {
  previewImage: string;
};

type Image = {
  asset: Asset;
  _type: string;
  _upload: Upload;
};

type Slug = {
  current: string;
  _type: string;
};

type Author = {
  _id: string;
  name: string;
  slug: Slug;
  image: Image;
};

type Post = {
  _id: string;
  author: Author;
  _createdAt: string;
  title: string;
  slug: Slug;
  mainImage: Image;
  featured: any;
  categories: any;
  excerpt: any;
  publishedAt: string;
};

export type {
  Asset,
  Upload,
  Image,
  Slug,
  Author,
  Post
}