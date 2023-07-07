export const storageService = {
    loadFromStorage,
    saveToStorage
}

function saveToStorage(key, val) {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(val))

    }
}

function loadFromStorage(key) {
    if (typeof window !== 'undefined') {
        var val = localStorage.getItem(key)
        return JSON.parse(val)
    }
}