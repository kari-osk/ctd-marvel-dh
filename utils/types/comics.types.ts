export type FormDataType = {
    name: string;
    lastname: string;
    email: string;
    address1: string;
    address2?: string | null;
    city: string;
    state: string;
    zipCode: string;
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
}

export type ComicType = {
    id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    thumbnail: {
        path: string;
        extension: string;
    };
    characters: CharactersType;
};

export type ComicsPropsType = {
    data: ComicType;
  };

type CharactersType = {
    available: number;
    returned: number;
    collectionURI: string;
    items: ItemsType[];
};

type ItemsType = {
    resourceURI: string;
    name: string;
    role: string;
};


export interface ICharacter {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: URL[];
    thumbnail: IThumbnail;
    comics: IComics;
    stories: IStories;
    events: IComics;
    series: IComics;
}

interface IComics {
    available: string;
    returned: string;
    collectionURI: string;
    items: IComicsItem[];
}

interface IComicsItem {
    resourceURI: string;
    name: string;
}

interface IStories {
    available: string;
    returned: string;
    collectionURI: string;
    items: IStoriesItem[];
}

interface IStoriesItem {
    resourceURI: string;
    name: string;
    type: string;
}

interface IThumbnail {
    path: string;
    extension: string;
}

interface IURL {
    type: string;
    url: string;
}



// export type FormType = {
//     nome: string;
//     sobrenome: string;
//     email: string;
//     endereco: string;
//     numero: number;
//     complemento: string;
//     cep: number;
//     cidade: string;
//     estado: string;
//     cartao: number;
//     nomeCartao: string;
//     validade: Date;
//     cvv: number;
//   };