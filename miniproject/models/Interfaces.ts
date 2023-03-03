export interface IProductAPI{
    findAll:()=>IProduct[];
    findByCategory<T extends IProduct>(category: string): T[];
    findByText(input:string):IProduct[];
    findByPrice(x:number,y:number):IProduct[];
}

export interface IProduct{
    title:string,
    description:string;
    price:number
    rating:number,
    id:number|string,
    thumbnail:string
}

export interface ISmartPhone extends IProduct {
    color: string;
}

export interface ILaptop extends  IProduct {
    discountPercentage: number,
    screenDimentions: number,
}
export interface ITablet extends IProduct {
    cellular: boolean;
    wifi: boolean;
}

export interface ITelevision extends IProduct {
    smartTv:boolean;
    stock: number;
}
