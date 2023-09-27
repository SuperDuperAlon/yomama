interface Flower {
    $id: string;
    $createdAt: string;
    name: string;
    price: number;
}

interface Flowers {
    flowers: Flower[] | undefined;
}