export interface Photo {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
    likes: number;
    user: { name: string };
  }
  
  export type ModalImage = {
    alt_description: string;
    regular: string;
  };