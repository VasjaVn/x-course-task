import { stringConstants } from "./constants.js";

export const getStorageUsername = () => {
    return localStorage.getItem(stringConstants.storageKeyUsername);
}

export const initialStorageUsername = () => {
    const initialStorageUsername = getStorageUsername();
    if (!initialStorageUsername) {
        localStorage.setItem(stringConstants.storageKeyUsername, "");
    }
}

export const getValueFromStorageUsername = () => {
    return localStorage.getItem(stringConstants.storageKeyUsername);
}

export const setValueForStorageUsername = (value) => {
    localStorage.setItem(stringConstants.storageKeyUsername, value);
}
