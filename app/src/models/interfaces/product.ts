export interface Product {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Guid;
  content: Content;
  author: number;
  featured_media: number;
  template: string;
  category: number[];
  _links: Links;
  _embedded: Embedded;
}

interface Embedded {
  author: Author2[];
  'wp:featuredmedia': Wpfeaturedmedia[];
  'wp:term': Wpterm2[][];
}

interface Wpterm2 {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  _links: Links4;
}

interface Links4 {
  self: Self[];
  collection: Self[];
  about: Self[];
  'wp:post_type': Self[];
  curies: Cury[];
}

interface Wpfeaturedmedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: Guid;
  author: number;
  featured_media: number;
  caption: Guid;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: Mediadetails;
  source_url: string;
  _links: Links3;
}

interface Links3 {
  self: Self[];
  collection: Self[];
  about: Self[];
  author: Author[];
  replies: Author[];
}

interface Mediadetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Sizes;
  image_meta: Imagemeta;
}

interface Imagemeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

interface Sizes {
  medium: Medium;
  thumbnail: Medium;
  full: Full;
}

interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

interface Medium {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

interface Author2 {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: Avatarurls;
  _links: Links2;
}

interface Links2 {
  self: Self[];
  collection: Self[];
}

interface Avatarurls {
  '24': string;
  '48': string;
  '96': string;
}

interface Links {
  self: Self[];
  collection: Self[];
  about: Self[];
  author: Author[];
  'version-history': Versionhistory[];
  'predecessor-version': Predecessorversion[];
  'wp:featuredmedia': Author[];
  'wp:attachment': Self[];
  'wp:term': Wpterm[];
  curies: Cury[];
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface Wpterm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

interface Predecessorversion {
  id: number;
  href: string;
}

interface Versionhistory {
  count: number;
  href: string;
}

interface Author {
  embeddable: boolean;
  href: string;
}

interface Self {
  href: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Guid {
  rendered: string;
}
