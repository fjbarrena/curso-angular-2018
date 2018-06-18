import { ChampionImage } from "./champion-image";

export class ChampionStaticData {
    id: number;
    key: string;
    name: string;
    title: string;

    image: ChampionImage;

    constructor(object?: ChampionStaticData) {
        if (object) {
            this.id = object.id ? object.id : -1 ;
            this.key = object.key;
            this.name = object.name;
            this.title = object.title;
            this.image = object.image;
        } else {
            this.id = 0;
            this.key = '';
            this.name = '';
            this.title = '';
            this.image = null;
        }
    }

}
