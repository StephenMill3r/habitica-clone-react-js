export type UserThingType = {
    category: string;
    name: string;
    price: number;
    img: string;
};


export interface userState {
    levelPoint: number;
    healthPoint: number;
    money: number;
    level: number;
    maxHealthPoint: number;
    maxLevelPoint: number;
    things: UserThingType[]
}

