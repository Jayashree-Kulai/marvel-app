

    export interface Url {
        type: string;
        url: string;
    }

    export interface Thumbnail {
        path: string;
        extension: string;
    }

    export interface Item {
        resourceURI: string;
        name: string;
        role: string;
    }

    export interface Creators {
        available: number;
        collectionURI: string;
        items: Item[];
        returned: number;
    }

    export interface Item2 {
        resourceURI: string;
        name: string;
    }

    export interface Characters {
        available: number;
        collectionURI: string;
        items: Item2[];
        returned: number;
    }

    export interface Item3 {
        resourceURI: string;
        name: string;
        type: string;
    }

    export interface Stories {
        available: number;
        collectionURI: string;
        items: Item3[];
        returned: number;
    }

    export interface Item4 {
        resourceURI: string;
        name: string;
    }

    export interface Comics {
        available: number;
        collectionURI: string;
        items: Item4[];
        returned: number;
    }

    export interface Events {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    }

    export interface Movie {
        id: number;
        title: string;
        description?: any;
        resourceURI: string;
        urls: Url[];
        startYear: number;
        endYear: number;
        rating: string;
        type: string;
        modified: Date;
        thumbnail: Thumbnail;
        creators: Creators;
        characters: Characters;
        stories: Stories;
        comics: Comics;
        events: Events;
        next?: any;
        previous?: any;
    }





// export interface Movie {
//         Title: string;
//         Year: string;
//         Rated: string;
//         Released: string;
//         Runtime: string;
//         Genre: string;
//         Director: string;
//         Writer: string;
//         Actors: string;
//         Plot: string;
//         Language: string;
//         Country: string;
//         Awards: string;
//         Poster: string;
//         Metascore: string;
//         imdbRating: string;
//         imdbVotes: string;
//         imdbID: string;
//         Type: string;
//         DVD: string;
//         BoxOffice: string;
//         Production: string;
//         Website: string;
//         Response: string;
//     }