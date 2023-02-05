import { stringConstants, storageTemplate } from "./constants.js";

export const getStorageCart = () => {
    return localStorage.getItem(stringConstants.storageKeyCart);
}

export const initialStorageCart = () => {
    const initialStorage = getStorageCart() ;
    if (!initialStorage) {
        localStorage.setItem(stringConstants.storageKeyCart, storageTemplate);
    }
}

export const addCartItemToStorage = (item) => {
    const storageString = getStorageCart();
    const cart = JSON.parse(storageString);
    cart.items.push(item);
    localStorage.setItem(stringConstants.storageKeyCart, JSON.stringify(cart));
}

export const removeCartItemFromStorageByID = (cartItemId) => {
    const storageString = getStorageCart();
    const cart = JSON.parse(storageString);
    cart.items = cart.items.filter(cartItem => { cartItem = JSON.parse(cartItem); return cartItem.id !== cartItemId; });
    localStorage.setItem(stringConstants.storageKeyCart, JSON.stringify(cart));
}

export const removeCartAllItems = () => {
    localStorage.setItem(stringConstants.storageKeyCart, storageTemplate);
}

export const getCartItemsFromStorage = () => {
    let storageString = getStorageCart();
    if (storageString == null) {
        localStorage.setItem(stringConstants.storageKeyCart, storageTemplate);
        storageString = getStorageCart();
    }
    const storage = JSON.parse(storageString);
    return storage.items;
}

export const getCountCartItemsInStorage = () => {
    return getCartItemsFromStorage().length;
}
