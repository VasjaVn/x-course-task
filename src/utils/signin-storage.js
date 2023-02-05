import { stringConstants } from "./constants.js";

export const getStorageSignin = () => {
    return localStorage.getItem(stringConstants.storageKeySignin);
}

export const initialStorageSignin = () => {
    const initialStorageSignin = getStorageSignin();
    if (!initialStorageSignin) {
        localStorage.setItem(stringConstants.storageKeySignin, "false");
    }
}

export const getValueFromStorageSignin = () => {
    return localStorage.getItem(stringConstants.storageKeySignin);
}

export const setValueForStorageSignin = (value) => {
    localStorage.setItem(stringConstants.storageKeySignin, value);
}
