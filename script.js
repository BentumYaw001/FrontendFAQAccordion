let IconPlus1 = document.getElementById("IconPlus1");
let IconMinus1 = document.getElementById("IconMinus1");
let Answer1 = document.getElementById("Answer1");

let IconPlus2 = document.getElementById("IconPlus2");
let IconMinus2 = document.getElementById("IconMinus2");
let Answer2 = document.getElementById("Answer2");

let IconPlus3 = document.getElementById("IconPlus3");
let IconMinus3 = document.getElementById("IconMinus3");
let Answer3 = document.getElementById("Answer3");

let IconPlus4 = document.getElementById("IconPlus4");
let IconMinus4 = document.getElementById("IconMinus4");
let Answer4 = document.getElementById("Answer4");


function CloseOtherTabs(IconMinus,IconPlus,Answer){
    IconMinus.classList.add('Hidden');
    IconPlus.classList.remove('Hidden');
    Answer.classList.add('Hidden');
}

function CloseTabs(IconMinus,IconPlus,Answer){
    IconMinus.classList.add('Hidden');
    IconPlus.classList.remove('Hidden');
    Answer.classList.add('Hidden');
}

function OpenTab(IconMinus,IconPlus,Answer){
    IconMinus.classList.remove('Hidden');
    IconPlus.classList.add('Hidden');
    Answer.classList.remove('Hidden');
}

function ShowAnswer1(){
    OpenTab(IconMinus1,IconPlus1,Answer1);
    CloseOtherTabs(IconMinus2,IconPlus2,Answer2);
    CloseOtherTabs(IconMinus3,IconPlus3,Answer3);
    CloseOtherTabs(IconMinus4,IconPlus4,Answer4);
}

function ShowAnswer2(){
    OpenTab(IconMinus2,IconPlus2,Answer2);
    CloseOtherTabs(IconMinus1,IconPlus1,Answer1);
    CloseOtherTabs(IconMinus3,IconPlus3,Answer3);
    CloseOtherTabs(IconMinus4,IconPlus4,Answer4);
}

function ShowAnswer3(){
    OpenTab(IconMinus3,IconPlus3,Answer3);
    CloseOtherTabs(IconMinus2,IconPlus2,Answer2);
    CloseOtherTabs(IconMinus1,IconPlus1,Answer1);
    CloseOtherTabs(IconMinus4,IconPlus4,Answer4);
}

function ShowAnswer4(){
    OpenTab(IconMinus4,IconPlus4,Answer4);
    CloseOtherTabs(IconMinus2,IconPlus2,Answer2);
    CloseOtherTabs(IconMinus3,IconPlus3,Answer3);
    CloseOtherTabs(IconMinus1,IconPlus1,Answer1);
}

function CloseAllTabs(){
    CloseTabs(IconMinus1,IconPlus1,Answer1);
    CloseTabs(IconMinus2,IconPlus2,Answer2);
    CloseTabs(IconMinus3,IconPlus3,Answer3);
    CloseTabs(IconMinus4,IconPlus4,Answer4);
}
