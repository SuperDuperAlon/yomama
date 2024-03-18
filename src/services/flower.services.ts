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
        var flowers: Flower[] = storageService.loadFromStorage(STORAGE_KEY)
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
        if (sortBy.by === 'price' && flowers !== undefined) {
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

function _createFlowers() {
    if (typeof window !== 'undefined') {
        var flowers: Flower[] = storageService.loadFromStorage(STORAGE_KEY)
        if (!flowers || !flowers.length) {
            const flowerNames: string[] = [
                "Rose", "Sunflower", "Lily", "Tulip", "Daisy", "Orchid",
                "Daffodil", "Peony", "Carnation", "Hydrangea", "Cherry Blossom", "Lavender"
            ];

            flowerNames.forEach((name) => {
                const flower: Flower = {
                    name: name,
                    _id: _makeId(5),
                    price: _makePrice()
                };
                flowers.push(flower);
            });

            storageService.saveToStorage(STORAGE_KEY, flowers)
        }
    }
}

function _makeId(length: number = 5) {
    var text: string = ''
    var possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i: number = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function _makePrice() {
    const price: number = Math.floor(Math.random() * 100)
    return price
}