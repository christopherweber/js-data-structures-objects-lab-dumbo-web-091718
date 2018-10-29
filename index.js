const driver = {
    
}

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, {[key]: value});

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value 

    return driver
}

function deleteFromDriverByKey(driver, key){
    
    newDriverArr = {...driver}
    delete newDriverArr[key]
    return newDriverArr
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}