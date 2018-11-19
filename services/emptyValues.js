function removeEmptyValues(array) {
    const newArray = [];

    if(array){
        array.forEach(item => {
            let val = item  === "@@IMCR@@" ?  "" : item;
            newArray.push(val);
        });
    }

    return newArray;
}


module.exports = { removeEmptyValues}