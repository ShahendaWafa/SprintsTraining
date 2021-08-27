

var name = prompt('Please enter your name : ');
while(name.length <= 1){
   name = prompt('Please enter your REAL name : ');
}
var pass = parseInt(prompt('Please enter the password :'));
i = 1;
while(pass !== 123){
    if(i == 3)
        break;
    pass = parseInt(prompt('Please enter the password :'));
    i++;
}
if(i == 3){
    alert("You've entered the password incorrect 3 times.")
}
else{
    let month = parseInt(prompt('Please enter your birth month : '));
    while(month < 1 || month > 12){
        month = parseInt(prompt('Please enter a REAL month : '));
    }
    M_31 = [1, 3, 5 , 7, 8, 10, 12];
    M_30 = [4, 6, 9, 11];

    let feb, thirties, thirty_ones = false;

    if(M_31.includes(month)){
        thirty_ones = true;
    }

    else if(M_30.includes(month)){
        thirties = true;
    }

    else 
        feb = true;

    let day = parseInt(prompt('Please enter your birth day : '));
    if(feb){
        while(day < 1 || day > 28){
            day = parseInt(prompt('Please enter your REAL birth day : '));
        }
    }
    if(thirties){
        while(day < 1 || day > 30){
            day = parseInt(prompt('Please enter your REAL birth day : '));
        }
    }
    if(thirty_ones){
        while(day < 1 || day > 31){
            day = parseInt(prompt('Please enter your REAL birth day : '));
        }
    }
    
    horoscopes = [["Capricorn", "Aquarius", 20], 
                    ["Aquarius", "Pisces", 19],
                    ["Pisces", "Aries", 21],
                    ["Aries", "Taurus", 20],
                    ["Taurus", "Gemini", 21],
                    ["Gemini", "Cancer", 21],
                    ["Cancer", "Leo", 23],
                    ["Leo", "Virgo", 23],
                    ["Virgo", "Libra", 23],
                    ["Libra", "Scorpio", 22],
                    ["Scorpio", "Sagittarius", 23],
                    ["Sagittarius", "Capricorn", 22]];

    alert("Hello " + name + ", your zodiac sign is " + horoscopes[month-1][+(horoscopes[month-1][2] <= day)] + "!");

}
