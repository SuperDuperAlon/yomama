interface Flower{
    _id: string
    name: string;
    price: number;
}

interface User {
    email?: string;
    password: string;
    username: string;
}

interface FilterBy {
    name: string;
    price: number;
}

interface SortBy {
    by: string;
    asc: boolean;
}