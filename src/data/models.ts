export type ProductsList = ProductItem[]

export interface ProductItem {
    name: string;
    sku: string;
    id: number;
    price: number;
    quantity: number;
}
