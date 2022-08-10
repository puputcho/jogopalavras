function login() {
    p1name = document.getElementById('playermaca_nome').value;
    p2name = document.getElementById('playerbacate_nome').value;

    localStorage.setItem("p1name", p1name);
    localStorage.setItem("p2name", p2name);

    window.location.replace("game_page.html")
}
