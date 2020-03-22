function run() {
    // TODO
    // • n:n yövuoron jälkeen oltava vähintään n vapaapäivää
    // • n:n yövuoron jälkeen oltava vähintään n-1 vapaapäivää
    // • n:n yövuoron jälkeen oltava vähintään n-2 vapaapäivää
    
    let dayOffsAfterNight = 3
    // let nDayOffsAfterNight = 0
    let numberOfShifts = 10
    let daysPerShift = 14
    let dayOffPenalty = 100

    // For random shifts with 25% chance for offday, 25% workshift, 50% nightshift
    let testShifts = []
    for (let i = 0; i < numberOfShifts; i++) {
        testShifts.push({ shift: generateShift(daysPerShift), penalty: 0 })
    }

    // For manual testing
    // testShifts = [
    //     {
    //         shift: [
    //             'Y', 'V', 'V', 'Y',
    //             'Y', 'Y', 'Y', 'Y',
    //             'Y', 'Y', 'Y', 'Y',
    //             'Y', 'Y'
    //           ],
    //         penalty: 0
    //     }
    // ]

    for (let i = 0; i < testShifts.length; i++) {
        let nights = nightStreak(testShifts[i].shift)
        for (let j = 0; j < nights.length; j++) {
            if (nights[j].count > 5) {
                testShifts[i].penalty += 100 * nights[j].count
            }
            checkDayOffs(testShifts[i], nights[j], dayOffsAfterNight, dayOffPenalty)
        }
    }
    console.log("run -> testShifts", testShifts)
}

function nightStreak(shift) {
    let returnValue = []
    let count = 0
    for (let i = 0; i < shift.length; i++) {
        if (shift[i] == 'Y') {
            count++
        } else {
            if (count != 0) {
                returnValue.push({ start: i - count, count: count })
                count = 0
            }
        }
    }
    if (count > 5) {
        returnValue.push({ start: shift.length - count, count: count })
    }
    return returnValue
}

function checkDayOffs(shift, nights, dayOffCount, penalty) {
    if (shift.shift[nights.start + nights.count] != 'V' && shift.shift[nights.start + nights.count] != undefined) {
        shift.penalty += nights.count * penalty
    }
    if (--dayOffCount > 0) {
        nights.start++
        checkDayOffs(shift, nights, dayOffCount, penalty / 2)
    }
}

function generateShift(days) {
    let randomNormal = function () {
        // http://www.rosettacode.org/wiki/Random_numbers#JavaScript
        return Math.cos(2 * Math.PI * Math.random()) * Math.sqrt(-2 * Math.log(Math.random()))
    }
    let shift = []
    for (let i = 0; i < days; i++) {
        let rand
        do {
            rand = randomNormal() / 2 + 1
        } while (rand == 1)
        if (rand > 1) {
            do {
                rand = randomNormal() / 2 + 1
            } while (rand == 1)
            if (rand > 1) {
                //25%
                shift.push('T')
            } else {
                //25%
                shift.push('V')
            }
        } else {
            //50%
            shift.push('Y')
        }
    }
    return shift
}

run()
