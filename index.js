// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driverName){
    drivers.push(driverName)
}

function destructivelyPrependDriver(driverName){
    drivers.unshift(driverName)
}

function destructivelyRemoveLastDriver(driverName){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(driverName){
    drivers.shift()
}

function appendDriver(driverName){
    let addDriver = [... drivers, driverName]
    return addDriver
}

function prependDriver(driverName){
    let addDriver = [driverName, ... drivers]
    return addDriver
}

function removeLastDriver(){
    let addDriver = [... drivers]
    addDriver.pop()
    return addDriver
}

function removeFirstDriver(){
    let addDriver = [... drivers]
    addDriver.shift()
    return addDriver
}