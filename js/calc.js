$('input[type="number"]').bind('input', function () { 
    
    var All = 0;

    var stars = document.getElementsByClassName('form-control');
    
    var Allnum = 0;
    for(let i = 0; i < stars.length; i++){
        Allnum += Number(stars[i].value);
    }
    
    var Tshirts = document.getElementsByName('Tshirts');
    for(let i = 0; i < Tshirts.length; i++){
        var a = Number(Tshirts[i].value);
        All += 3500*a;
    }

    var taoru = document.getElementsByName('taoru');
    for(let i = 0; i < taoru.length; i++){
        var b = Number(taoru[i].value);
        All += 2000*b;
    }

    var bag = document.getElementsByName('bag');
    for(let i = 0; i < bag.length; i++){
        var c = Number(bag[i].value);
        All += 3700*c;
    }

    var holder = document.getElementsByName('holder');
    for(let i = 0; i < holder.length; i++){
        var d = Number(holder[i].value);
        All += 1100*d;
    }

    var uchiwa = document.getElementsByName('uchiwa');
    for(let i = 0; i < uchiwa.length; i++){
        var e = Number(uchiwa[i].value);
        All += 800*e;
    }

    var acsta = document.getElementsByName('acsta');
    for(let i = 0; i < acsta.length; i++){
        var f = Number(acsta[i].value);
        All += 1000*f;
    }

    var cut = document.getElementsByName('cut');
    for(let i = 0; i < cut.length; i++){
        var g = Number(cut[i].value);
        All += 900*g;
    }

    var card = document.getElementsByName('card');
    for(let i = 0; i < card.length; i++){
        var h = Number(card[i].value);
        All += 1100*h;
    }

    var badge = document.getElementsByName('badge');
    for(let i = 0; i < badge.length; i++){
        var j = Number(badge[i].value);
        All += 500*j;
    }

    var file = document.getElementsByName('file');
    for(let i = 0; i < file.length; i++){
        var k = Number(file[i].value);
        All += 500*k;
    }

    var onament = document.getElementsByName('onament');
    for(let i = 0; i < onament.length; i++){
        var l = Number(onament[i].value);
        All += 1400*l;
    }

    var book = document.getElementsByName('book');
    for(let i = 0; i < book.length; i++){
        var m = Number(book[i].value);
        All += 1800*m;
    }

    var light = document.getElementsByName('light');
    for(let i = 0; i < light.length; i++){
        var n = Number(light[i].value);
        All += 4800*n;
    }

    var nes = document.getElementsByName('nes');
    for(let i = 0; i < nes.length; i++){
        var o = Number(nes[i].value);
        All += 5000*o;
    }

    var parker = document.getElementsByName('parker');
    for(let i = 0; i < parker.length; i++){
        var p = Number(parker[i].value);
        All += 10000*p;
    }

    var seven = Math.floor(All/7000);

    document.getElementById("result-erea").innerHTML = "<h3 class='text-danger'>合計" + Allnum + "点</h3>" + "<h3 class='text-danger'>" + All + "円</h3>" + "<h5 class='text-danger'>7000円トレカ</h5><h3 class='text-danger'>" + seven + "枚</h3>";
});
