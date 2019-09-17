var spinner;
var target = document.getElementById('reportes-container');
var opts = {
    lines: 13,
    length: 28,
    width: 15,
    radius: 42,
    scale: 1,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
    position: 'absolute'
}
let firstRow;
let secondRow;
let thirdRow;

$(document).ready(function () {
    $('a').on('click', (event) => {
        event.preventDefault();
        let link = event.target.href;
        require("electron").shell.openExternal(link);
    });
});

function euclideanAlgorithm(originalA, originalB) {
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);
    if (a > b) {
        if (!isNaN(parseInt(a / b)) && !isNaN(parseInt(a % b))) {
            firstRow.push(parseInt(a / b));
            secondRow.push(a);
            thirdRow.push(parseInt(a % b));
        } else {
            secondRow.push(a);
        }
    } else {
        if (!isNaN(parseInt(b / a)) && !isNaN(parseInt(b % a))) {
            firstRow.push(parseInt(b / a));
            secondRow.push(b);
            thirdRow.push(parseInt(b % a));
        } else {
            secondRow.push(b);
        }
    }
    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

$(".number-input").keypress(function (evt) {
    if (evt.target.value.length > 0) {
        return (event.charCode >= 48 && event.charCode <= 57) && evt.target.value.length < 9
    } else {
        return (event.charCode >= 49 && event.charCode <= 57) && evt.target.value.length < 9
    }
});

$("#calculate-button").click(function (evt) {
    $("#table-body").html("");
    $("#mcd-text").text("");
    if ($("#first-number").val() && $("#second-number").val()) {
        firstRow = ["Concientes", null];
        secondRow = ["Divisores/Dividendos", ];
        thirdRow = ["Restos", null];
        $("#mcd-text").text("MCD = " + euclideanAlgorithm(parseInt($("#first-number").val()), parseInt($("#second-number").val())));
        let first = "<tr class='number-row'>"
        firstRow.forEach(number => {
            first += number != null ? "<td>" + number + "</td>" : "<td></td>"
        });
        first += "</tr>"

        $("#table-body").append(first);

        let second = "<tr class='number-row'>"
        secondRow.forEach(number => {
            second += number != null ? "<td>" + number + "</td>" : "<td></td>"
        });
        second += "</tr>"

        $("#table-body").append(second);

        let third = "<tr class='number-row'>"
        thirdRow.forEach(number => {
            third += number != null ? "<td>" + number + "</td>" : "<td></td>"
        });
        third += "</tr>"
        $("#table-body").append(third);
    } else {
        alert("ingresa Valores validos")
    }
});

process.on("uncaughtException", function (err) {
    console.log("uncaughtException", err);
});
