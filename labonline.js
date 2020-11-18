// Created by Rudi Thiel
// ==UserScript==
// @name         Lab Online
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automate boring and almost impossible lab online tasks
// @author       You
// @match        http://www.lab-on-line.com/*
// @grant        none
// ==/UserScript==

window.onload=(function() {
    window.setInterval(words, 20);
    window.setInterval(phrases, 1);
});

words = function() {
    var answer = "";
    if (document.getElementById('flash_box_flash').childNodes.length != 0) {
        if (document.getElementById('flash_box_flash').childNodes[0].innerHTML != answer) {
           answer = document.getElementById('flash_box_flash').childNodes[0].innerHTML;
           console.log(answer);
           if (answer != "") {
               document.getElementById('answer_text_field').value = answer;
           }
        }
        console.log(document.getElementById('flash_box_flash').childNodes[0].innerHTML);
    }
};

phrases = function() {
    var answer = "";
    console.log(document.getElementById('flash_box_flash_phrase').childNodes.length)
    console.log(document.getElementById('flash_box_flash_phrase').childNodes[0])
    if (document.getElementById('flash_box_flash_phrase').childNodes.length != 0) {
        if (document.getElementById('flash_box_flash_phrase').childNodes[0].innerHTML != answer) {
           answer = document.getElementById('flash_box_flash_phrase').childNodes[0].innerHTML;
           console.log(answer);
           if (answer != "") {
               document.getElementById('phrase_answer_text_field').value = answer;
           }
        }
        console.log(document.getElementById('flash_box_flash_phrase').childNodes[0].innerHTML);
    }