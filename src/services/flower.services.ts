import { storageService } from '@/services/storage.service'

_createFlowers()
const STORAGE_KEY: string = 'flowerDB'

export const flowerService = {
    query,
    queryMain
}

async function query(filterBy: FilterBy, sortBy: SortBy) {
    if (typeof window === 'undefined' || !window.localStorage) return console.log('loading')
    else {
        var flowers = storageService.loadFromStorage(STORAGE_KEY)
        if (filterBy.name) {
            const regex = new RegExp(filterBy.name, 'i')
            flowers = flowers.filter((flower: Flower) => regex.test(flower.name))
        }
        if (filterBy.price) {
            flowers = flowers.filter((flower: Flower) => flower.price > filterBy.price)
        }
        if (sortBy.by === 'name') {
            flowers = flowers.sort((a: Flower, b: Flower) => {
                if (sortBy.asc) {
                    return a.name.localeCompare(b.name)
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
        }
        if (sortBy.by === 'price') {
            flowers = flowers.sort((a: Flower, b: Flower) => {
                if (sortBy.asc) {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });
        }
        return flowers
    }
}

async function queryMain() {
    if (typeof window === 'undefined' || !window.localStorage) return console.log('loading')
    else return storageService.loadFromStorage(STORAGE_KEY)
}