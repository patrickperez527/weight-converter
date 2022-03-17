const tonne = document.getElementById('tonne'); 
const kilogram = document.getElementById('kilogram'); 
const gram = document.getElementById('gram'); 
const miligram = document.getElementById('miligram'); 
const microgram = document.getElementById('microgram'); 
const imperialTon = document.getElementById('imperial-ton'); 
const usTon = document.getElementById('us-ton'); 
const stone = document.getElementById('stone'); 
const pound = document.getElementById('pound'); 
const ounce = document.getElementById('ounce');

tonne.addEventListener('input', () => {
    kilogram.value = tonne.value * 1000;
    gram.value = tonne.value * 1e+6;
    miligram.value = tonne.value * 1e+9;
    microgram.value = tonne.value * 1e+12;
    imperialTon.value = tonne.value / 1.016;
    usTon.value = tonne.value * 1.102;
    stone.value = tonne.value * 157;
    pound.value = tonne.value * 2205;
    ounce.value = tonne.value * 35274;

    if (tonne.value === '') {
        kilogram.value = '';
        gram.value = '';
        miligram.value = '';
        microgram.value = '';
        imperialTon.value = '';
        usTon.value = '';
        stone.value = '';
        pound.value = '';
        ounce.value = '';
    }
})

kilogram.addEventListener('input', () => {
    tonne.value = kilogram.value / 1000;
    gram.value = kilogram.value * 1000;
    miligram.value = kilogram.value * 1e+6;
    microgram.value = kilogram.value * 1e+9;
    imperialTon.value = kilogram.value / 1016;
    usTon.value = kilogram.value / 907;
    stone.value = kilogram.value / 6.35;
    pound.value = kilogram.value * 2.205;
    ounce.value = kilogram.value * 35.274;
    
    if (kilogram.value === '') {
        tonne.value = '';
        gram.value = '';
        miligram.value = '';
        microgram.value = '';
        imperialTon.value = '';
        usTon.value = '';
        stone.value = '';
        pound.value = '';
        ounce.value = '';
    }
})

gram.addEventListener('input', () => {
    tonne.value = gram.value / 1e+6;
    kilogram.value = gram.value / 1000;
    miligram.value = gram.value * 1000;
    microgram.value = gram.value * 1e+6;
    imperialTon.value = gram.value / 1.016e+6;
    usTon.value = gram.value / 907185;
    stone.value = gram.value / 6350;
    pound.value = gram.value / 454;
    ounce.value = gram.value / 28.35;

    if (gram.value === '') {
        kilogram.value = '';
        tonne.value = '';
        miligram.value = '';
        microgram.value = '';
        imperialTon.value = '';
        usTon.value = '';
        stone.value = '';
        pound.value = '';
        ounce.value = '';
    }
})

miligram.addEventListener('input', () => {
    tonne.value = miligram.value / 1e+9;
    kilogram.value = miligram.value / 1e+6;
    gram.value = miligram.value / 1000;
    microgram.value = miligram.value * 1000;
    imperialTon.value = miligram.value / 1.016e+9;
    usTon.value = miligram.value / 9.072e+8;
    stone.value = miligram.value / 6.35e+6;
    pound.value = miligram.value / 453592;
    ounce.value = miligram.value / 28350;

    if (miligram.value === '') {
        kilogram.value = '';
        gram.value = '';
        tonne.value = '';
        microgram.value = '';
        imperialTon.value = '';
        usTon.value = '';
        stone.value = '';
        pound.value = '';
        ounce.value = '';
    }
})

microgram.addEventListener('input', () => {
    tonne.value = microgram.value / 1e+12;
    kilogram.value = microgram.value / 1e+9;
    gram.value = microgram.value / 1e+6;
    miligram.value = microgram.value / 1000;
    imperialTon.value = microgram.value / 1.016e+12;
    usTon.value = microgram.value / 9.072e+11;
    stone.value = microgram.value / 6.35e+9;
    pound.value = microgram.value / 4.536e+8;
    ounce.value = microgram.value / 2.835e+7;

    if (microgram.value === '') {
        kilogram.value = '';
        gram.value = '';
        miligram.value = '';
        tonne.value = '';
        imperialTon.value = '';
        usTon.value = '';
        stone.value = '';
        pound.value = '';
        ounce.value = '';
    }
})

imperialTon.addEventListener('input', () => {
    tonne.value = imperialTon.value * 1.016;
    kilogram.value = imperialTon.value * 1016;
    gram.value = imperialTon.value * 1.016e+6;
    miligram.value = imperialTon.value * 1.016e+9;
    microgram.value = imperialTon.value * 1.016e+12;
    usTon.value = imperialTon.value * 1.12;
    stone.value = imperialTon.value * 160;
    pound.value = imperialTon.value * 2240;
    ounce.value = imperialTon.value * 35840;

    if (imperialTon.value === '') {
        kilogram.value = '';
        gram.value = '';
        miligram.value = '';
        microgram.value = '';
        tonne.value = '';
        usTon.value = '';
        stone.value = '';
        pound.value = '';
        ounce.value = '';
    }
})

usTon.addEventListener('input', () => {
    tonne.value = usTon.value / 1.102;
    kilogram.value = usTon.value * 907;
    gram.value = usTon.value * 907185;
    miligram.value = usTon.value * 9.072e+8;
    microgram.value = usTon.value * 9.072e+11;
    imperialTon.value = usTon.value / 1.12;
    stone.value = usTon.value * 143;
    pound.value = usTon.value * 2000;
    ounce.value = usTon.value * 32000;

    if (usTon.value === '') {
        kilogram.value = '';
        gram.value = '';
        miligram.value = '';
        microgram.value = '';
        imperialTon.value = '';
        tonne.value = '';
        stone.value = '';
        pound.value = '';
        ounce.value = '';
    }
})

stone.addEventListener('input', () => {
    tonne.value = stone.value / 157;
    kilogram.value = stone.value * 6.35;
    gram.value = stone.value * 6350;
    miligram.value = stone.value * 6.35e+6;
    microgram.value = stone.value * 6.35e+9;
    imperialTon.value = stone.value / 160;
    usTon.value = stone.value / 143;
    pound.value = stone.value * 14;
    ounce.value = stone.value * 224;

    if (stone.value === '') {
        kilogram.value = '';
        gram.value = '';
        miligram.value = '';
        microgram.value = '';
        imperialTon.value = '';
        usTon.value = '';
        tonne.value = '';
        pound.value = '';
        ounce.value = '';
    }
})

pound.addEventListener('input', () => {
    tonne.value = stone.value / 2205;
    kilogram.value = pound.value / 2.205;
    gram.value = pound.value * 454;
    miligram.value = pound.value * 453592;
    microgram.value = pound.value * 4.536e+8;
    imperialTon.value = pound.value / 2240;
    usTon.value = pound.value / 2000;
    stone.value = pound.value / 14;
    ounce.value = pound.value * 16;

    if (pound.value === '') {
        kilogram.value = '';
        gram.value = '';
        miligram.value = '';
        microgram.value = '';
        imperialTon.value = '';
        usTon.value = '';
        stone.value = '';
        tonne.value = '';
        ounce.value = '';
    }
})

ounce.addEventListener('input', () => {
    tonne.value = stone.value / 35274;
    kilogram.value = ounce.value / 35.274;
    gram.value = ounce.value * 28.35;
    miligram.value = ounce.value * 28350;
    microgram.value = ounce.value * 2.835e+7;
    imperialTon.value = ounce.value / 35840;
    usTon.value = ounce.value / 32000;
    stone.value = ounce.value / 224;
    pound.value = ounce.value / 16;

    if(ounce.value === '') {
        kilogram.value = '';
        gram.value = '';
        miligram.value = '';
        microgram.value = '';
        imperialTon.value = '';
        usTon.value = '';
        stone.value = '';
        pound.value = '';
        tonne.value = '';
    }
})