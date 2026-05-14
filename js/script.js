let teamList = document.getElementById("team-list");

teamList.onchange = function() {
    let selected = this.value;
    let team = teamData[selected];
    if (!team) return;
    document.getElementById('info-name').textContent = team.name;
    document.getElementById('info-division').textContent = team.division;
    document.getElementById('info-owner').textContent = team.owner;
    document.getElementById('info-primary-color').textContent = team.primaryColor;
    document.getElementById('info-current-player').textContent = team.currentPlayer;
    document.getElementById('info-best-all-time-player').textContent = team.bestAllTimePlayer;
    document.getElementById('info-head-coach').textContent = team.headCoach;
    document.getElementById('info-year-founded').textContent = team.yearFounded;
    document.getElementById('info-best-all-time-record').textContent = team.bestAllTimeRecord;
    document.getElementById('info-power-ranking').textContent = team.powerRanking;
    document.getElementById("info-pic").src = `img/${selected}.jpg`;
}