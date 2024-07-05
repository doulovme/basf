import service from "..";
export function getCQBookMess(){
    return service({
        method:'POST',
        url:'https://www.mahelei.com/index.php/BasfChemistryDev/Index/getUserStatusInfo',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        data:{
            lang:0,
        }
    })
}
export function getZJBookMess(){
    return service({
        method:'POST',
        url:'https://www.mahelei.com/index.php/BasfChemistryDev/Index/getDateTimeLists'
    })
}
export function postCityMess(){
    return service({
        method:'POST',
        url:'https://www.mahelei.com/index.php/BasfChemistryDev/Index/getDateTimeLists',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data:{
            test:'test'
        }
    })
}
export function postCityStatus(){
    return service({
        method:'POST',
        url:'https://www.mahelei.com/index.php/BasfChemistryDev/Index/getUserStatusInfo',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data:{lang:'1'}
    })
}
export function postCaptchaRequest(mobile,lang){
    return service({
        method:'POST',
        url:'https://www.mahelei.com/index.php/BasfChemistryDev/Index/getCheckCode',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data:{
            mobile:mobile,
            lang:lang
        }
    })
}
export function userBook(username,mobile,code,age,gender,date,time){
    return service({
        method:'POST',
        url:'https://www.mahelei.com/index.php/BasfChemistryDev/Index/userReservation',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data:{
            username:username,
            mobile:mobile,
            code:code,
            age:age,
            gender:gender,
            date:date,
            time:time
        }
    })
}