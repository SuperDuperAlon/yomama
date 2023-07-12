// import { utilService } from './util.service.js'
import { storageService } from '@/services/storage.service'

const STORAGE_KEY = 'flowerDB'
_createFlowers()

export const flowerService = {
    query,
    // get,
    remove,
    // save,
    // getEmptyFlower,
    // getDefaultFilter,
    // getDefaultReview,
    // saveReview,
    // removeReview
}

function query() {
    if (typeof window === 'undefined' || !window.localStorage) return console.log('loading')
    else {
        return storageService.loadFromStorage(STORAGE_KEY)
        // .then(flowers => {
        //     if (filterBy.txt) {
        //         const regex = new RegExp(filterBy.txt, 'i')
        //         flowers = flowers.filter(flower => regex.test(flower.name))
        //     }
        //     // if (filterBy.minPrice) {
        //     //     flowers = flowers.filter(flower => flower.listPrice.amount >= filterBy.minPrice)
        //     // }
        //     // if (filterBy.pageCount) {
        //     //     flowers = flowers.filter(flower => flower.pageCount <= filterBy.pageCount)
        //     // }
        //     // if (filterBy.minYear) {
        //     //     flowers = flowers.filter(flower => filterBy.minYear >= utilService.getYearsDistance(flower.publishedDate))
        //     // }

        //     return flowers

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
    if (flower.id) {
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
    return { txt: '' }
}
// function getDefaultFilter() {
//     return { txt: '', minPrice: '', pageCount: '', minYear: '' }
// }


function _saveFlowersToStorage(flowers) {
    storageService.saveToStorage(STORAGE_KEY, flowers)
}

function _loadFlowersFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}


function _createFlowers() {
    let flowers = storageService.loadFromStorage(STORAGE_KEY)
    console.log(flowers);
    if (!flowers || !flowers.length) {
        flowers = [
            {
                name: 'rose',
                _id: _makeId(),
                price: 20,
            },
            {

                name: 'lilac',
                _id: _makeId(),
                price: 20,
            },
            {

                name: 'lily',
                _id: _makeId(),
                price: 20,
            },
            {

                name: 'orchid',
                _id: _makeId(),
                price: 20,
            }

        ]
        flowers.forEach(flower => {
        })
        storageService.saveToStorage(STORAGE_KEY, flowers)
    }
}
