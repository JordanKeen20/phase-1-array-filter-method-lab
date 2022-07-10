const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, string){
    const result = drivers.filter ( driversName => driversName.toLowerCase() === string.toLowerCase())
    return result;
}

function fuzzyMatch (drivers, letter){
    const result = drivers.filter(driversName => driversName.startsWith(letter))
    return result
}

function matchName (drivers, rider){
    const city = drivers.filter (driversName => driversName.name === rider)
    return city
}