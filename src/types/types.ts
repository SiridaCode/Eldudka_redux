type IShop = {
    id: number,
    name: string,
}

type IDataAvailability = {
    count: number,
    shop: IShop,
}[]

export interface IDataProps  {
    availability: IDataAvailability,
    description: string,
    images: string[],
    name: string,
    price: number,
}