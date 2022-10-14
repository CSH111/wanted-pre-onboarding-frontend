export const isValidEmail = (value) => (value.includes("@") ? true : false);
export const isValidPassword = (value) => (value.length > 7 ? true : false);
