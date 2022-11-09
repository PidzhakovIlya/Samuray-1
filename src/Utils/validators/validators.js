

export const required = (value) => {
    if(value) return undefined;
    return 'Field is Required (Заполните поле)';
    
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return` Max lenght is ${maxLength} symbols`;
    return undefined;
}