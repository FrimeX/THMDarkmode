// ==UserScript==
// @name         THM Dark mode prototype
// @namespace    http://tampermonkey.net/
// @version      prototype.2
// @description  Dark mode for THM cause my eyes were burning
// @author       FrimeX
// @match        https://tryhackme.com/*
// @grant        GM_addStyle
// ==/UserScript==
// background-color: #262626;
// background-image: linear-gradient(45deg, #262626 0%, #ffffff 100%);
var colors = ['#161616', '#242424', '#363636', '#495057', '#FFFFFF', '#00000000', '#DDDDDD']
var URL = document.URL;
var $;
//checker
window.onload = function() {
    main();
    if (document.URL.match('/rooms')) {

    } else if(document.URL.match('/hacktivities')) {


    } else if(document.URL.match('/dashboard')) {
        for(var x = 0; x < 3; x++) {
            document.getElementsByClassName('mini-grid-item progress-card clear-link')[x].style.backgroundColor = colors[5];
            document.getElementsByClassName('mini-grid-item progress-card clear-link')[x].style.color = colors[4];
        }
        document.getElementById('dashboard-streak').style.color = 'white'
        document.getElementsByClassName('progress-card pathway-card mb-4')[0].style.backgroundColor = colors[5];
        document.getElementsByClassName('progress-card pathway-card mb-4')[0].style.color = colors[4];
        document.getElementsByClassName('size-18 text-black bold')[3].style.color = colors[4];
        document.getElementsByTagName('text')[0].style.color = colors[4];
        document.getElementsByTagName('text')[1].style.color = colors[4];
        document.getElementsByClassName('jumbotron page-jumbo mb-3 noselect')[0].style.backgroundColor = colors[5];
    } else if(document.URL.match('/leaderboards')) {

    } else if(document.URL.match('/games/koth')) {

    } else if(document.URL.match('/access')) {

    } else if(document.URL.match('/my-machine')) {

    } else if(document.URL.match('/releases')) {

    } else if(document.URL.match('/docs')) {

    } else if(document.URL.match('/profile')) {
        // declared done
        document.getElementsByClassName('jumbotron page-jumbo mb-3 noselect')[0].style.backgroundColor = '#00000000';
        document.getElementsByClassName('nav nav-tabs normal mb-3')[0].style.backgroundColor = colors[3];
        document.getElementsByClassName('nav nav-tabs normal mb-3')[0].style.color = colors[4];
        document.getElementsByClassName('container pb')[0].style.borderRadius = "10px";
        document.getElementsByClassName('container pb')[0].style.backgroundColor = colors[1];
        for(var i = 0; i < 12; i++) {
            document.getElementsByClassName('card')[i].style.backgroundColor = colors[2];
            document.getElementsByClassName('card')[i].style.color = colors[4];
        }
    } else if(document.URL.match('/paths')) {
        for(var pop = 0; pop < document.getElementsByClassName('card shadow-light noselect room-main').length; pop++) {
            document.getElementsByClassName("card shadow-light noselect room-main")[pop].style.color = colors[1];
        }
        setTimeout(function() {
            for(var d = 0; d < document.getElementsByClassName("card mb task-complete").length; d++) {
                document.getElementsByClassName("card mb task-complete")[d].style.color = colors[4];
                document.getElementsByClassName("card mb task-complete")[d].style.backgroundColor = colors[3];
            }
            for(var j = 0; j < document.getElementsByClassName("card mb task-incomplete").length; j++) {
                document.getElementsByClassName("card mb task-incomplete")[j].style.color = colors[4];
                document.getElementsByClassName("card mb task-incomplete")[j].style.backgroundColor = colors[3];
            }
}, 1000);
    } else {
            //complete cards
        setTimeout(function() {
            for(var d = 0; d < document.getElementsByClassName("card mb task-complete").length; d++) {
                document.getElementsByClassName("card mb task-complete")[d].style.color = colors[4];
                document.getElementsByClassName("card mb task-complete")[d].style.backgroundColor = colors[3];
            }
            for(var j = 0; j < document.getElementsByClassName("card mb task-incomplete").length; j++) {
                document.getElementsByClassName("card mb task-incomplete")[j].style.color = colors[4];
                document.getElementsByClassName("card mb task-incomplete")[j].style.backgroundColor = colors[3];
            }}, 1000);
            document.getElementsByClassName("room-header")[0].style.color = colors[6];
            document.getElementsByClassName("card-body")[3].style.backgroundColor = colors[5];
            document.getElementsByClassName("card-body")[3].style.borderColor = colors[5];
            document.getElementsByClassName("mb")[0].style.color = colors[4];
            document.getElementById("task-list").style.border = "0px solid #00000000";
            document.getElementById("task-list").style.borderRadius = "10px";
            document.getElementById("task-list").style.backgroundColor = colors[5];

    }
    return;
}
function main() {
    GM_addStyle("  body { background: url(https://assets.tryhackme.com/img/illustrations/shapes_gray.svg) repeat;}");
    document.getElementsByTagName('html')[0].style.transitionDuration = "1s";
    document.getElementsByTagName('html')[0].style.backgroundColor = colors[0];

}
