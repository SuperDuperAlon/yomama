interface Flower{
    $id: string;
    $createdAt: string;
    name?: string;
    price?: number;
}

interface User {
    email: string;
    password: string;
}

interface FilterBy {
    $id: string;
    $createdAt: string;
    name: string;
    price: number;
}