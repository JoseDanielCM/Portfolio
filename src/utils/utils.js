// src/utils/utils.js
export const getPublicUrl = (path) => {
    return `${import.meta.env.BASE_URL}${path}`;
};
