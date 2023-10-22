function showHours() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12;
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    var horaCompleta = horas + ':' + minutos + ':' + segundos + ' ' + ampm;
    document.getElementById('reloj1').innerHTML = horaCompleta;

    const deg = 6;
    const horasManecilla = document.querySelector('.hora');
    const minutosManecilla = document.querySelector('.minuto');
    const segundosManecilla = document.querySelector('.segundo');

    let hr = horas * 30;
    let min = minutos * deg;
    let seg = segundos * deg;

    horasManecilla.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutosManecilla.style.transform = `rotate(${min}deg)`;
    segundosManecilla.style.transform = `rotate(${seg}deg)`;
}

setInterval(showHours, 1000);