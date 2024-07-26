let day = new Date().getDay();
switch(day){
    case 1:
        day = 'mon';
        break;
    case 2:
        day = "thus";
        break;
    case 3:
        day = "wed";
        break;
    case 4:
        day = "thus";
        break;
    case 5:
        day = "fri";
        break;
    case 6:
            day = "sat";
            break;
    default:
        day = 'wrong choice';
        break;
}

document.getElementById('demo').innerHTML = day;