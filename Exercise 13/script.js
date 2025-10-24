function createCard(title, cName, views, monthsOld, duration, thumbnil) {

    let viewNumber
    if (views < 1000000) {
        viewNumber =views / 1000 + "K";
    }

    else if (views > 1000000) {
        let viewCountM = views / 1000000 ;
        viewCountM = viewCountM.toFixed(1);
        viewNumber = viewCountM + "M";
    }
    else {
        viewNumber = views;
    }


    let monthsOldCal
    if (monthsOld > 12) {
        let year = monthsOld / 12;
        year  =  year.toFixed(1);
        monthsOldCal = year + " years";
        // monthsOldCal = (monthsOld / 12 && monthsOld != 12) + "years";
    }

    else if (monthsOld == 12) {
        monthsOldCal = 1 + " year";
    }

    else if (monthsOld < 12 && monthsOld != 1) {
        monthsOldCal = monthsOld + " months"
    }

    else if (monthsOld == 1) {
        monthsOldCal = 1 + " month";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnil}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="textSection">
                <h1>${title}
                </h1>
                <p>${cName} . ${viewNumber} views . ${monthsOldCal} ago</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}


createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #8", "CodeWithHarry", 56000000, 55, "11:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #8", "CodeWithHarry", 56775407, 1, "11:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #8", "CodeWithHarry", 56000000, 24, "11:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")