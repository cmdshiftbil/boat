interface ExcerptChildren {
  text: string;
}
interface Excerpt {
  children: ExcerptChildren[]
}
interface Image {
  alt: string;
  createdAt: string;
  filename: string;
  filesize: number;
  height: number;
  id: string;
  mimeType: string;
  updatedAt: string;
  url: string;
  width: number;
}

interface TextChildren {
  text: string;
}
interface LiChildren {
  type: "li";
  text?: never;
  children: TextChildren[];
}



// interface Richtext {
//   type: "ul" | "large-body" | "upload";
//   children: RichtextChildren [];
// }

interface UlRichText {
  type?: "ul";
  relationTo?: never;
  value?: never;
  children: LiChildren[];
}

interface UploadFields {
  enableLink: boolean;
  link?: {
    newTab: boolean;
    type: "custom"
    url: "https://google.com/"
  }
}

interface UploadRichText {
  type?: "upload";
  relationTo: "media";
  value: Image;
  // fields: UploadFields;
  children: TextChildren[];
}
interface TextRichText {
  type?: never;
  relationTo?: never;
  value?: never;
  children: TextChildren[];
}
interface LargeBodyRichText {
  type?: "large-body";
  relationTo?: never;
  value?: never;
  children: TextChildren[];
}

type Richtext = UlRichText | UploadRichText | TextRichText | LargeBodyRichText;

interface BlogContentField {
  richText: Richtext[];
}

interface Content {
  blockType: "blogContent";
  id: string;
  blogContentFields: BlogContentField;
}
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: Excerpt[];
  content: Content[];
  publishedOn: string;
  image?: Image;
}
