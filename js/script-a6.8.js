function init() {
    $("#my-progress-bar").prop("style", "width: 0%");
    $("#my-progress-bar").html(getProsressBarState().width);
    $("button[id=one]").prop("disabled", false);
    $("button[id=three]").prop("disabled", false);
    $("button[id=seven]").prop("disabled", false);
    console.log("документ готов");
}
function getProsressBarState() {
    return $("#my-progress-bar").prop("style");
}

function plusOne() {
    let progressValue = getProsressBarState().width;
    progressValue = +progressValue.replace("%", "");
    if (progressValue <= 99) {    
        $("#my-progress-bar").prop("style", `width: ${progressValue + 1}%`);
        $("#my-progress-bar").html(getProsressBarState().width);
    }
}

function plusThree() {
    let progressValue = getProsressBarState().width;
    progressValue = +progressValue.replace("%", "");
    if (progressValue <= 97) {
        $("#my-progress-bar").prop("style", `width: ${progressValue + 3}%`);
        $("#my-progress-bar").html(getProsressBarState().width);
    } else {
        $("#my-progress-bar").prop("style", `width: 100%`);
        $("#my-progress-bar").html(`100%`);
    }
}

function plusSeven() {
    let progressValue = getProsressBarState().width;
    progressValue = +progressValue.replace("%", "");
    if (progressValue <=93) {
        $("#my-progress-bar").prop("style", `width: ${progressValue + 7}%`);
        $("#my-progress-bar").html(getProsressBarState().width);
    } else {
        $("#my-progress-bar").prop("style", `width: 100%`);
        $("#my-progress-bar").html(`100%`);
    }    
}


$("button[id=one]").click(plusOne);
$("button[id=three]").click(plusThree);
$("button[id=seven]").click(plusSeven);
$(document).ready(init);