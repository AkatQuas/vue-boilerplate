export const isNoEmpty = (v, e) => {
    return v === '' ? e : void 0;
};
export const isNoSpace = (v, e) => {
    return v.trim() === '' ? e : void 0;
};

export const minLength = (v, l, e) => {
    return v.trim().length < l ? e : void 0;
};

export const maxLength = (v, l, e) => {
    return v.length > l ? e : void 0;
};
export const isMobile = (v, e) => {
    return !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(v) ? e : void 0;
};

export const minAndMax = (v, min, max, e) => {
    return v.length < min || v.length > max ? e : void 0;
};

export const regMatch = (v, pattern, e) => {
    return pattern.test(v) ? void 0 : e;
};
