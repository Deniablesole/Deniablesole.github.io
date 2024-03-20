function displayDateTime() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('currentDateTime').innerText = "Today is " + formattedDate;
}

function submitUserInput() {
    var userName = document.getElementById('userName').value;
    var userFeeling = document.getElementById('userFeeling').value;

    
    var userInputDisplay = document.getElementById('userInputDisplay');
    userInputDisplay.innerHTML = "<p>Hayes Designs welcomes you, " + userName + "! We're glad you are feeling " + userFeeling + "!</p>";
}

function calculatePolygon() {
    var favoriteNumber = document.getElementById('favoriteNumber').value;

    
    favoriteNumber = Math.round(Math.abs(parseFloat(favoriteNumber)));

    
    var polygonName = getPolygonName(favoriteNumber);

    
    alert("The shape with " + favoriteNumber + " sides is called a " + polygonName + ".");
}

function provideQuote() {
    var numberOfPages = document.getElementById('numberOfPages').value;

    
    if (isNaN(numberOfPages) || numberOfPages < 0 || numberOfPages > 10) {
        alert("Please enter a valid number of pages between 0 and 10.");
        return;
    }

    
    var quote = numberOfPages * 500;

    
    var quoteResult = document.getElementById('quoteResult');
    quoteResult.innerHTML = "Your quote is $" + quote + ".";
}

function createNimbleCampaigns() {
    
    var userInputDisplay = document.getElementById('userInputDisplay');
    userInputDisplay.innerHTML = "<p>Hayes Designs wants to create nimble marketing campaigns for your business!</p>";
}

function sniffOutTrends() {
    
    var userInputDisplay = document.getElementById('userInputDisplay');
    userInputDisplay.innerHTML = "<p>Hayes Designs has a keen sense for sniffing out and leveraging current trends in online marketing!</p>";
}

function designDynamicWebsites() {
    
    var userInputDisplay = document.getElementById('userInputDisplay');
    userInputDisplay.innerHTML = "<p>Hayes Designs specializes in designing dynamic and responsive websites to enhance your online presence!</p>";
}

function getPolygonName(sides) {
switch (sides) {
case 1:
    return "Henagon";
case 2:
    return "Digon";
case 3:
    return "Trigon";
case 4:
    return "Tetragon";
case 5:
    return "Pentagon";

default:
    return "Polygon";
}
}

displayDateTime();