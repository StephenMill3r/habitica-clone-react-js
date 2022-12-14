import HealthFlaskImg from "./HealthFlask.png";
import SwordOneImg from "./Item__00.png";
import SwordSecondImg from "./Item__01.png";
import React from "react";

type shopThingType = {
	category: string,
	name: string,
	price: number,
	img: string
}

type shopThingsType = shopThingType[]

export const shopThings: shopThingsType = [
	{
		category: 'Health flask',
		name: 'Health flask',
		price: 5,
		img: HealthFlaskImg,
	},
	{
		category: 'Thing',
		name: 'Sword 1 type',
		price: 5,
		img: SwordOneImg,
	},
	{
		category: 'Thing',
		name: 'Sword 2 type',
		price: 5,
		img: SwordSecondImg,
	},
];
