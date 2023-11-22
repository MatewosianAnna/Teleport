function drop() {
    let inp = document.getElementById('inp').value;
    if (inp == 'macbook') {
        document.getElementById('m1').style.boxShadow = '5px 5px 5px ';
        document.getElementById('m2').style.boxShadow = '5px 5px 5px ';
        document.getElementById('m3').style.boxShadow = '5px 5px 5px ';
        document.getElementById('m4').style.boxShadow = '5px 5px 5px ';
        document.getElementById('hidden').style.display = 'block';
    } else {
        document.getElementById('m1').style.boxShadow = '5px 5px 5px ';
        document.getElementById('m2').style.boxShadow = '5px 5px 5px ';
        document.getElementById('m3').style.boxShadow = '5px 5px 5px ';
        document.getElementById('m4').style.boxShadow = '5px 5px 5px ';
    }
    if (inp == 'iphone') {
        document.getElementById('phone1').style.boxShadow = '10px 10px grey';
        document.getElementById('phone2').style.boxShadow = '10px 10px grey';
        document.getElementById('hidden').style.display = 'block';
    }
}

function drop1() {
    let inp = document.getElementById('inp').value;
    if (inp == 'iphone') {
        document.getElementById('phone1').style.display = 'none';
        document.getElementById('phone2').style.display = 'none';
        document.getElementById('phone3').style.display = 'block';
        document.getElementById('phone4').style.display = 'block';
    }
    if (inp == 'macbook') {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';

        document.getElementById('mc1').style.display = 'block';
        document.getElementById('mc2').style.display = 'block';
        document.getElementById('mc3').style.display = 'block';
        document.getElementById('mc4').style.display = 'block';
    }

}