export const convertToIndian=(str)=>{
    return str.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
}