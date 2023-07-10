interface Image {
  url: string;
  width: number;
  height: number;
  alt?: string;
}

interface PageMetaData {
  title: string;
  description: string;
  keywords?: string;
  images?: Image[];
  defaultParams?: any;
  defaultOGParams?: any;
}

interface ISeo {
  [page: string]: PageMetaData;
}
