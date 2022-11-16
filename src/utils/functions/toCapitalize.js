export const toCapitalize = (string) => {
    const firstLetter = string[0].toUpperCase();
    
    return firstLetter + string.slice(1)
}