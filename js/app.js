//interactive host display//
$(document).ready(function () {

    $('#mikeContainer').mouseover(shrink)
    function shrink() {
        $('#mike').css({
            display: "block",
            height: "300px",
            width: "300px",
            padding: "20px"
        })

        $('#m2').css({
            display: "block",
            width: "800px",
        })
    }
    $('#mikeContainer').on('mouseover', shrink)


    $('#mike').mouseout(grow)
    function grow() {
        $('#mike').css({
            height: "1000px",
            width: "1000px",
        })

        $('#m2').css({
            display: "none",
        })

    }

    $('#mike').on('mouseout', grow)

})


$(document).ready(function () {
    $('#frankContainer').mouseover(shrink)
    function shrink() {
        $('#frank').css({
            display: "block",
            height: "300px",
            width: "300px",
            padding: "20px",
        })

        $('#f2').css({
            display: "block",
            width: "800px",
        })
    }
    $('#frankContainer').on('mouseover', shrink)

    $('#frank').mouseout(grow)
    function grow() {
        $('#frank').css({
            height: "1000px",
            width: "1000px",
        })

        $('#f2').css({
            display: "none",
        })

    }

    $('#frank').on('mouseout', grow)
})



$(document).ready(function () {
    $('#jacobyContainer').mouseover(shrink)
    function shrink() {
        $('#jacoby').css({
            display: "block",
            height: "300px",
            width: "300px",
            padding: "20px",
        })

        $('#j2').css({
            display: "block",
            width: "800px",
        })
    }
    $('#jacobyContainer').on('mouseover', shrink)

    $('#jacoby').mouseout(grow)
    function grow() {
        $('#jacoby').css({
            height: "1000px",
            width: "1000px",
        })

        $('#j2').css({
            display: "none",
        })

    }

    $('#jacoby').on('mouseout', grow)


});

// Modal
document.getElementById('button').addEventListener('click',function(){
    document.querySelector('.modal').style.display='flex';
});

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modal').style.display='none';
});
