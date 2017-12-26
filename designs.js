let height, width, color, reset;
function makeGrid() {
    $("#pixel_canvas").html("");
    height = $("#input_height").val();
    width = $("#input_width").val();
    if (height > 50 || width > 50 || height < 1 || width < 1) {
        if (!error.classList.contains("error")) {
            error.classList.toggle("error");
            error.innerText = "the dimension are has to be smaller than 50 and bigger than 0";
            backUp();
        }
    } else {
        error.innerText = "";
        $("div").removeClass("error");
        for (let x = 0; x < height; x++) {
            $('#pixel_canvas').append('<tr></tr>');
        }
        for (let y = 0; y < width; y++) {
            $('#pixel_canvas tr').each(function () {
                $(this).append('<td></td>');
            });
        }
    }
}
color = $('#colorPicker');
$(document).on("mousedown", "tr td", function () {
    let colorValue = color.val();
    $(this).css('background-color', colorValue);
    $('tr td').bind("mousemove", function () {
        let colorValue = color.val();
        $(this).css('background-color', colorValue);
    }).mouseup(function() {
        $('td').unbind('mousemove');
    });
    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "#FFFFFF")
    })
});
reset = $("#pixel_canvas").html();
function backUp() {
    $("#pixel_canvas").html(reset);
}