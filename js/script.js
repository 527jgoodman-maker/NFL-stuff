let statelist = document.getElementById("state-list");

statelist.onchange = function() {
    let selected = this.value;
    document.getElementById('info-division').textContent = stateData[selected].division;
    document.getElementById('info-owner').textContent = stateData[selected].owner;
    document.getElementById('info-primary-color').textContent = stateData[selected].primaryColor;
    document.getElementById('info-current-player').textContent = stateData[selected].currentPlayer;
    document.getElementById('info-best-all-time-player').textContent = stateData[selected].bestAllTimePlayer;
    document.getElementById('info-head-coach').textContent = stateData[selected].headCoach;
    document.getElementById('info-year-founded').textContent = stateData[selected].yearFounded;
    document.getElementById('info-best-all-time-record').textContent = stateData[selected].bestAllTimeRecord;
    document.getElementById('info-power-ranking').textContent = stateData[selected].powerRanking;
    document.getElementById("info-pic").src = `img/${selected}.jpg`;
}