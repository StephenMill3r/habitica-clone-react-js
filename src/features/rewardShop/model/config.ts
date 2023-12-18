import HealthFlaskImg from "../../../assets/shopThings/HealthFlask.png";
import SwordOneImg from "../../../assets/shopThings/Item__00.png";
import SwordSecondImg from "../../../assets/shopThings/Item__01.png";

export enum ThingsCategoryEnum {
    HEALTH_FLASK = 'Health flask',
    THING = 'Thing',

}

type ThingsType = {
    category: string,
    name: string,
    price: number,
    img: string
}

export const shopThings: ThingsType[] = [
    {
        category: ThingsCategoryEnum.HEALTH_FLASK,
        name: 'Health flask',
        price: 5,
        img: HealthFlaskImg,
    },
    {
        category: ThingsCategoryEnum.THING,
        name: 'Sword 1 type',
        price: 5,
        img: SwordOneImg,
    },
    {
        category: ThingsCategoryEnum.THING,
        name: 'Sword 2 type',
        price: 5,
        img: SwordSecondImg,
    },
];



