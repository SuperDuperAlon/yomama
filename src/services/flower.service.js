// import { utilService } from './util.service.js'
import { storageService } from '@/services/storage.service'

const STORAGE_KEY = 'flowerDB'
_createFlowers()

export const flowerService = {
    query,
    // get,
    // remove,
    // save,
    // getEmptyFlower,
    getDefaultFilter
    // getDefaultReview,
    // saveReview,
    // removeReview
}

async function query(filterBy, sortBy) {
    console.log(filterBy);
    if (typeof window === 'undefined' || !window.localStorage) return console.log('loading')
    else {
        var flowers = storageService.loadFromStorage(STORAGE_KEY)
        if (filterBy.name) {
            const regex = new RegExp(filterBy.name, 'i')
            flowers = flowers.filter(flower => regex.test(flower.name))

        }
        if(filterBy.price) {
            flowers = flowers.filter(flower => flower.price > filterBy.price)
        }
        // .then(flowers => {
        //     if (filterBy.name) {
        //         const regex = new RegExp(filterBy.name, 'i')
        //         flowers = flowers.filter(flower => regex.test(flower.name))
        //     }
        // if (filterBy.minPrice) {
        //     flowers = flowers.filter(flower => flower.listPrice.amount >= filterBy.minPrice)
        // }
        // if (filterBy.pageCount) {
        //     flowers = flowers.filter(flower => flower.pageCount <= filterBy.pageCount)
        // }
        // if (filterBy.minYear) {
        //     flowers = flowers.filter(flower => filterBy.minYear >= utilService.getYearsDistance(flower.publishedDate))
        // }

        return flowers

        // })
    }
}

function get(flowerId) {
    if (typeof window !== 'undefined') {
        return storageService.get(STORAGE_KEY, flowerId)
    }
}

function remove(flowerId) {
    return storageService.remove(STORAGE_KEY, flowerId)
}

function save(flower) {
    if (flower._id) {
        return storageService.put(STORAGE_KEY, flower)
    } else {
        return storageService.post(STORAGE_KEY, flower)
    }
}

function getEmptyFlower(name = '') {
    return { title: '' }
}
// function getEmptyFlower(name = '', price = '') {
//     return { title: '', price: '' }
// }

function getDefaultFilter() {
    return { name: '', price: 29 }
}
// function getDefaultFilter() {
//     return { txt: '', minPrice: '', pageCount: '', minYear: '' }
// }


// Private functions

function _saveFlowersToStorage(flowers) {
    storageService.saveToStorage(STORAGE_KEY, flowers)
}

function _loadFlowersFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}

function _createFlowers() {
    if (typeof window !== 'undefined') {
        var flowers = storageService.loadFromStorage(STORAGE_KEY)
        if (!flowers || !flowers.length) {
            flowers = [

                { name: "Rose" },
                { name: "Tulip" },
                { name: "Daisy" },
                { name: "Sunflower" },
                { name: "Lily" },
                { name: "Orchid" },
                { name: "Daffodil" },
                { name: "Carnation" },
                { name: "Hydrangea" },
                { name: "Peony" },
                { name: "Poppy" },
                { name: "Chrysanthemum" }

            ]
            flowers.forEach(flower => {
                flower._id = _makeId()
                flower.price = _makePrice()

            })
            storageService.saveToStorage(STORAGE_KEY, flowers)
        }
    }
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function _makePrice() {
    const price = Math.floor(Math.random() * 100)
    return price
}