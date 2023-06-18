interface Author {
  name: string;
  image: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: Date;
  publishedDate: Date;
  author: Author;
  featuredImage: string;
  tags?: string[];
}
