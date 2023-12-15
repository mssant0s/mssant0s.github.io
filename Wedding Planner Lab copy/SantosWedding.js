function WeddingPlannerDistributor() {
    let totalGuests = prompt('How many people will be coming to your wedding?')
    let numberOfTables = prompt('How many tables will you have in your venue?')

    guestsPerTable = Math.floor(totalGuests/numberOfTables)
    remainingGuests = totalGuests % numberOfTables


    alert('With the values you provided, your ' + totalGuests + ' guests will be seated as follows: ' + remainingGuests + ' tables with ' + (guestsPerTable + 1) + ' , and ' + (numberOfTables - remainingGuests) + ' tables with ' + guestsPerTable)
}
WeddingPlannerDistributor()