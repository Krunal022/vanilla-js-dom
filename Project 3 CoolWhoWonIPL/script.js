let btn = document.querySelector("button")
let h1 = document.querySelector("#card h1")
let box = document.querySelector("#card")

const iplTeams = [
    {
        teamName: "MI",  // Mumbai Indians
        primaryColor: "#0076A8",  // Blue
        secondaryColor: "#FFB81C" // Yellow
    },
    {
        teamName: "CSK",  // Chennai Super Kings
        primaryColor: "#FFB81C",  // Yellow
        secondaryColor: "#004B87" // Blue
    },
    {
        teamName: "DC",   // Delhi Capitals
        primaryColor: "#1E4E80",  // Blue
        secondaryColor: "#F8A800" // Orange
    },
    {
        teamName: "RCB",  // Royal Challengers Bangalore
        primaryColor: "#C12C2C",  // Red
        secondaryColor: "#FFB81C" // Yellow
    },
    {
        teamName: "KKR",  // Kolkata Knight Riders
        primaryColor: "#512D6D",  // Purple
        secondaryColor: "#FFC72C" // Gold
    },
    {
        teamName: "PBKS", // Punjab Kings
        primaryColor: "#E30613",  // Red
        secondaryColor: "#FFD100" // Yellow
    },
    {
        teamName: "RR",   // Rajasthan Royals
        primaryColor: "#0068A5",  // Blue
        secondaryColor: "#F6A800" // Orange
    },
    {
        teamName: "SRH",  // Sunrisers Hyderabad
        primaryColor: "#FF7F32",  // Orange
        secondaryColor: "#000000" // Black
    },
    {
        teamName: "LSG",  // Lucknow Super Giants
        primaryColor: "#1C6E1C",  // Green
        secondaryColor: "#FFD100" // Yellow
    },
    {
        teamName: "GT",   // Gujarat Titans
        primaryColor: "#0085CA",  // Blue
        secondaryColor: "#FF8C00" // Orange
    }
];

// console.log(iplTeams[5]);


btn.addEventListener("click", function () {
    let num = Math.floor(Math.random() * iplTeams.length)
    let winner = iplTeams[num]

    h1.textContent = winner.teamName
    h1.style.color = winner.secondaryColor
    card.style.backgroundColor = winner.primaryColor
})