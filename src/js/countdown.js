// events first day
let countdownTime = new Date("2024-05-14T10:00:00").getTime();
let currentTime = new Date().getTime();
// let currentTime = new Date("2024-05-15T14:44:55").getTime();
let timeRemaining = countdownTime - currentTime;
// let currenTimeCounter = setInterval(() => {
//     currentTime += 1000;
// }, 1000)

if (timeRemaining > 0) {
    countdownTimer(countdownTime, "14.05.2024", "10.00", "Etkinliğe Kalan", false);
} else {
    showEventStatusContainer();
    updateEventStatus();
}

function countdownTimer(countdownTime, date, time, title, hideDay) {
    hideEventStatusContainer();
    let eventCountdownDate = document.getElementById("eventCountdownDate");
    let eventCountdownTitle = document.getElementById("eventCountdownTitle");
    let eventCountdownTimer = document.getElementById("eventCountdownTimer");
    let eventCountdownDateText = document.getElementById("eventCountdownDateText");
    let eventCountdownTimeText = document.getElementById("eventCountdownTimeText");

    eventCountdownTitle.innerText = title;
    eventCountdownDateText.innerText = date;
    eventCountdownTimeText.innerText = time;

    if (hideDay) {
        document.getElementById("countdownDay").classList.add("hidden");
        document.getElementById("countdownDayColon").classList.add("hidden");
    }

    eventCountdownDate.classList.remove("hidden");
    eventCountdownDate.classList.add("flex");
    eventCountdownTitle.classList.remove("hidden");
    eventCountdownTimer.classList.remove("hidden");
    eventCountdownTimer.classList.add("flex");
    let x = setInterval(() => {
        let currentTime = new Date().getTime();
        let timeRemaining = countdownTime - currentTime;
        if (timeRemaining < 0) {
            clearInterval(x);
            document.getElementById("eventCountdownDate").classList.add("hidden");
            document.getElementById("eventCountdownTitle").classList.add("hidden");
            document.getElementById("eventCountdownTimer").classList.add("hidden");

            showEventStatusContainer();
            updateEventStatus();
        } else {
            let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById("eventCountdownDay").innerHTML = days.toString().padStart(2, 0);
            document.getElementById("eventCountdownHour").innerHTML = hours.toString().padStart(2, 0);
            document.getElementById("eventCountdownMinute").innerHTML = minutes.toString().padStart(2, 0);
            document.getElementById("eventCountdownSecond").innerHTML = seconds.toString().padStart(2, 0);
        }
    }, 1000);
}

function updateEventStatus() {
    let dayOne = new Date("2024-05-14T10:00:00").getTime();
    let dayOneEnd = new Date("2024-05-14T16:40:00").getTime();
    let dayTwo = new Date("2024-05-15T10:00:00").getTime();
    let dayTwoEnd = new Date("2024-05-15T16:40:00").getTime();
    let dayThree = new Date("2024-05-16T10:00:00").getTime();
    let dayThreeEnd = new Date("2024-05-16T16:40:00").getTime();
    if (dayOne - currentTime < 0 && dayOneEnd - currentTime > 0) {
        // first day
        // console.log("day one");
        let currentEventDay = document.getElementById("currentEventDay");
        let currentEventSpeaker = document.getElementById("currentEventSpeaker");
        let currentEvent = document.getElementById("currentEvent");
        let nextEventDate = document.getElementById("nextEventDate");
        let nextEventSpeaker = document.getElementById("nextEventSpeaker");
        let nextEvent = document.getElementById("nextEvent");
        let nextEventContainer = document.getElementById("nextEventContainer");
        currentEventDay.innerText = "14.05.2024 - 1. Gün";

        // first event is the day start
        let eventOne = dayOne; // 10.00
        let eventOneEnd = eventOne + 3600000; // + 1 hour (3600000ms, 1h) 11.00

        // orkun kayra akyüz
        let eventTwo = new Date("2024-05-14T11:00:00").getTime(); // 11.00
        let eventTwoEnd = eventTwo + 3600000; // + 1 hour (3600000ms, 1h) 12.00

        // ara
        let eventThree = new Date("2024-05-14T12:00:00").getTime(); // 12.00
        let eventThreeEnd = eventThree + 4500000; // + 1.25 hour (4500000ms, 75m, 1h 15m) 13.15

        // murat mirgun ercan
        let eventFour = new Date("2024-05-14T13:15:00").getTime(); // 13.15
        let eventFourEnd = eventFour + 3600000; // + 1 hour (3600000ms, 1h) 14.15

        // kahoot
        let eventFive = new Date("2024-05-14T14:30:00").getTime(); // 14.30
        let eventFiveEnd = eventFive + 1800000; // .5 hour (1800000ms, 30m) 15.00

        // baki cubuk
        let eventSix = new Date("2024-05-14T15:15:00").getTime(); // 15.15
        let eventSixEnd = eventSix + 6000000; // + 1.75 hour (6000000ms, 1h 40m) 16.40

        // using a truth table to prevent unnecessary updates
        let truthArray = [false, false, false, false, false, false, false, false];
        let eventUpdate = setInterval(() => {
            if (eventOne - currentTime < 0 && eventOneEnd - currentTime > 0 && !truthArray[0]) {
                truthArray[0] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "BİZ2024 Açılış Töreni";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Girişimcilik ve Marka Yaratma";
                nextEventSpeaker.innerText = "Orkun Kayra AKYÜZ";
                nextEventDate.innerText = "11:00-12:00";
                // console.log("e1");
            } else if (eventTwo - currentTime < 0 && eventTwoEnd - currentTime > 0 && !truthArray[1]) {
                truthArray[1] = true;
                currentEventSpeaker.innerText = "Orkun Kayra AKYÜZ";
                currentEvent.innerText = "Girişimcilik ve Marka Yaratma";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "1 Saat 15 Dakika Ara";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "12:00-13:15";
                // console.log("e2");
            } else if (eventThree - currentTime < 0 && eventThreeEnd - currentTime > 0 && !truthArray[2]) {
                truthArray[2] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "1 Saat 15 Dakika Ara";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Gearing Up for a Career as a Student";
                nextEventSpeaker.innerText = "Murat Mirgün ERCAN";
                nextEventDate.innerText = "13:15-14:15";
                // console.log("e3");
            } else if (eventFour - currentTime < 0 && eventFourEnd - currentTime > 0 && !truthArray[3]) {
                truthArray[3] = true;
                currentEventSpeaker.innerText = "Murat Mirgün ERCAN";
                currentEvent.innerText = "Gearing Up for a Career as a Student";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Kahoot Yarışması";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "14:30-15:00";
                // console.log("e4");
            } else if (eventFourEnd - currentTime < 0 && eventFive - currentTime > 0 && !truthArray[4]) {
                truthArray[4] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "15 Dakika Ara";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Kahoot Yarışması";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "14:30-15:00";
                // console.log("e5");
            } else if (eventFive - currentTime < 0 && eventFiveEnd - currentTime > 0 && !truthArray[5]) {
                truthArray[5] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "Kahoot Yarışması";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Teknoloji Evrimi";
                nextEventSpeaker.innerText = "Baki ÇUBUK";
                nextEventDate.innerText = "15:15-16:15";
                // console.log("e6");
            } else if (eventFiveEnd - currentTime < 0 && eventSix - currentTime > 0 && !truthArray[6]) {
                truthArray[6] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "15 Dakika Ara";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Teknoloji Evrimi";
                nextEventSpeaker.innerText = "Baki ÇUBUK";
                nextEventDate.innerText = "15:15-16:15";
                // console.log("e7");
            } else if (eventSix - currentTime < 0 && eventSixEnd - currentTime > 0 && !truthArray[7]) {
                truthArray[7] = true;
                currentEventSpeaker.innerText = "Baki ÇUBUK";
                currentEvent.innerText = "Teknoloji Evrimi";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "1. Günün sonu";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "16:15";
                // console.log("e8");
            } else if (eventSixEnd - currentTime < 0 && dayTwo - currentTime > 0) {
                // the time between event days
                clearInterval(eventUpdate);
                countdownTimer(dayTwo, "15.05.2024", "10.00", "2. Güne Kalan", true)
            }
        }, 1000);
    } else if (dayOneEnd - currentTime < 0 && dayTwo - currentTime > 0) {
        // time between end of the first day and start of the second day
        // console.log("day one ended, day two haven't started yet");
        countdownTimer(dayTwo, "15.05.2024", "10.00", "2. Güne Kalan", true)
    } else if (dayTwo - currentTime < 0 && dayTwoEnd - currentTime > 0) {
        // second day
        // console.log("day two");
        let currentEventDay = document.getElementById("currentEventDay");
        let currentEventSpeaker = document.getElementById("currentEventSpeaker");
        let currentEvent = document.getElementById("currentEvent");
        let nextEventDate = document.getElementById("nextEventDate");
        let nextEventSpeaker = document.getElementById("nextEventSpeaker");
        let nextEvent = document.getElementById("nextEvent");
        let nextEventContainer = document.getElementById("nextEventContainer");
        currentEventDay.innerText = "15.05.2024 - 2. Gün";

        // first event is the day start
        let eventOne = dayTwo; // 10.00
        let eventOneEnd = eventOne + 900000; // + .25 hour (900000ms, 15m) 10.15

        // doğan dağdelen
        let eventTwo = new Date("2024-05-15T10:15:00").getTime(); // 10.15
        let eventTwoEnd = eventTwo + 3600000; // + 1 hour (3600000ms, 1h) 11.15

        // ahmet buğra çakıcı
        let eventThree = new Date("2024-05-15T11:30:00").getTime(); // 11.30
        let eventThreeEnd = eventThree + 3600000; // + 1 hour (3600000ms, 1h) 12.30

        // ara
        let eventFour = new Date("2024-05-15T12:30:00").getTime(); // 12.30
        let eventFourEnd = eventFour + 3600000; // + 1 hour (3600000ms, 1h) 13.30

        // daron yöndem
        let eventFive = new Date("2024-05-15T13:30:00").getTime(); // 13.30
        let eventFiveEnd = eventFive + 3600000; // 1 hour (3600000ms, 1h) 14.30

        // enes rodop
        let eventSix = new Date("2024-05-15T14:45:00").getTime(); // 14.45
        let eventSixEnd = eventSix + 3600000; // + 1 hour (3600000ms, 1h) 15.45

        // çekiliş
        let eventSeven = new Date("2024-05-15T16:00:00").getTime(); // 16.00
        let eventSevenEnd = eventSeven + 2400000; // + .75 hour (2400000ms, 45m) 16.40

        // using a truth table to prevent unnecessary updates
        let truthArray = [false, false, false, false, false, false, false, false, false, false];
        let eventUpdate = setInterval(() => {
            if (eventOne - currentTime < 0 && eventOneEnd - currentTime > 0 && !truthArray[0]) {
                // 10.00 - 10.15
                truthArray[0] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "BİZ2024 Açılış Töreni";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Nasıl Yazılımcı Olunmaz";
                nextEventSpeaker.innerText = "Doğan DAĞDELEN";
                nextEventDate.innerText = "10:15-11:15";
                // console.log("e1");
            } else if (eventTwo - currentTime < 0 && eventTwoEnd - currentTime > 0 && !truthArray[1]) {
                // 10.15 - 11.15
                truthArray[1] = true;
                currentEventSpeaker.innerText = "Doğan DAĞDELEN";
                currentEvent.innerText = "Nasıl Yazılımcı Olunmaz";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Backend Developer Yol Haritası";
                nextEventSpeaker.innerText = "Ahmet Buğra ÇAKICI";
                nextEventDate.innerText = "11:30-12:30";
                // console.log("e2");
            } else if (eventTwoEnd - currentTime < 0 && eventThree - currentTime > 0 && !truthArray[2]) {
                // 11.15 - 11.30
                truthArray[2] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "15 Dakika Ara";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Backend Developer Yol Haritası";
                nextEventSpeaker.innerText = "Ahmet Buğra ÇAKICI";
                nextEventDate.innerText = "11:30-12:30";
                // console.log("e3");
            } else if (eventThree - currentTime < 0 && eventThreeEnd - currentTime > 0 && !truthArray[3]) {
                // 11.30 - 12.30
                truthArray[3] = true;
                currentEventSpeaker.innerText = "Ahmet Buğra ÇAKICI";
                currentEvent.innerText = "Backend Developer Yol Haritası";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "1 Saat Ara";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "12:30-13:30";
                // console.log("e4");
            } else if (eventFour - currentTime < 0 && eventFourEnd - currentTime > 0 && !truthArray[4]) {
                // 12.30 - 13.30
                truthArray[4] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "1 Saat Ara";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Meet My AI Sidekick";
                nextEventSpeaker.innerText = "Daron YONDEM";
                nextEventDate.innerText = "13:30-14:30";
                // console.log("e5");
            } else if (eventFive - currentTime < 0 && eventFiveEnd - currentTime > 0 && !truthArray[5]) {
                // 13.30 - 14.30
                truthArray[5] = true;
                currentEventSpeaker.innerText = "Daron YONDEM";
                currentEvent.innerText = "Meet My AI Sidekick";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Cloud Nedir?";
                nextEventSpeaker.innerText = "Enes RODOP";
                nextEventDate.innerText = "14:45-15:45";
                // console.log("e6");
            } else if (eventFiveEnd - currentTime < 0 && eventSix - currentTime > 0 && !truthArray[6]) {
                // 14.30 - 14.45
                truthArray[6] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "15 Dakika Ara";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Cloud Nedir?";
                nextEventSpeaker.innerText = "Enes RODOP";
                nextEventDate.innerText = "14:45-15:45";
                // console.log("e7");
            } else if (eventSix - currentTime < 0 && eventSixEnd - currentTime > 0 && !truthArray[7]) {
                // 14.45 - 15.45
                truthArray[7] = true;
                currentEventSpeaker.innerText = "Enes RODOP";
                currentEvent.innerText = "Cloud Nedir?";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Çekiliş ve Bitiriş Konuşması";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "16:00";
                // console.log("e8");
            } else if (eventSixEnd - currentTime < 0 && eventSeven - currentTime > 0 && !truthArray[8]) {
                // 15.45 - 16.00
                truthArray[8] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "15 Dakika Ara";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "Çekiliş ve Bitiriş Konuşması";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "16:00";
                // console.log("e9");
            } else if (eventSeven - currentTime < 0 && eventSevenEnd - currentTime > 0 && !truthArray[9]) {
                // 16.00 - 16.40
                truthArray[9] = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "Çekiliş ve Bitiriş Konuşması";
                nextEventContainer.classList.remove("hidden");
                nextEvent.innerText = "2. Günün Sonu";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "16:40";
                // console.log("e10");
            } else if (eventSevenEnd - currentTime < 0 && dayThree - currentTime > 0) {
                // the time between event days
                clearInterval(eventUpdate);
                countdownTimer(dayThree, "16.05.2024", "10.00", "3. Güne Kalan", true)
            }
        }, 1000);
    } else if (dayTwoEnd - currentTime < 0 && dayThree - currentTime > 0) {
        // time between end of the second day and start of the third day
        // console.log("day two ended, day three haven't started yet");
        countdownTimer(dayThree, "16.05.2024", "10.00", "3. Güne Kalan", true)
    } else if (dayThree - currentTime < 0 && dayThreeEnd - currentTime > 0) {
        // third day
        // console.log("day three");
        let currentEventDay = document.getElementById("currentEventDay");
        let currentEventSpeaker = document.getElementById("currentEventSpeaker");
        let currentEvent = document.getElementById("currentEvent");
        let nextEventDate = document.getElementById("nextEventDate");
        let nextEventSpeaker = document.getElementById("nextEventSpeaker");
        let nextEvent = document.getElementById("nextEvent");
        let nextEventContainer = document.getElementById("nextEventContainer");
        currentEventDay.innerText = "16.05.2024 - 3. Gün";

        // using a flag to prevent unnecessary updates
        let updated = false;
        let eventUpdate = setInterval(() => {
            if (dayThree - currentTime < 0 && dayThreeEnd - currentTime > 0 && !updated) {
                updated = true;
                currentEventSpeaker.innerText = "";
                currentEvent.innerText = "Etkinliğin 3. Günü başladı";
                nextEventContainer.classList.add("hidden");
                nextEvent.innerText = "";
                nextEventSpeaker.innerText = "";
                nextEventDate.innerText = "";
                // console.log("e1");
            } else if (dayThreeEnd - currentTime < 0) {
                // last day
                clearInterval(eventUpdate);
                hideEventStatusContainer();
                activateEventEndedContainer();
            }
        }, 1000);
    } else {
        // console.log("event ended");
        hideEventStatusContainer();
        activateEventEndedContainer();
    }
}

function showEventStatusContainer() {
    document.getElementById("eventStatusContainer").classList.remove("hidden");
}

function hideEventStatusContainer() {
    document.getElementById("eventStatusContainer").classList.add("hidden");
}

function activateEventEndedContainer() {
    let eventEndedContainer = document.getElementById("eventEndedContainer");
    eventEndedContainer.classList.remove("hidden");
    eventEndedContainer.classList.add("flex");
}