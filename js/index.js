let clock = document.querySelector(".clock")

function time(){
    let date = new Date();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let minute = date.getMinutes();
    if (hours == "00" || hours == "01" || hours == "02"
        || hours == "03"|| hours == "04" || hours == "05"
        || hours == "06" || hours == "07"|| hours == "08" || hours == "09"){
            if (minute == "00" || minute == "01"
                || minute == "02" || minute == "03"
                || minute == "04" || minute == "05"
                || minute == "06" || minute == "07"
                || minute == "08"|| minute == "09"){

                if (seconds == "00" || seconds == "01"
                || seconds == "02" || seconds == "03"
                || seconds == "04" || seconds == "05"
                || seconds == "06" || seconds == "07"
                || seconds == "08"|| seconds == "09"){
                    clock.innerHTML = `0${hours}:0${minute}:0${seconds}`
                    clockbl.innerHTML = `0${hours}:0${minute}:0${seconds}`
                    
                }else{
                    if (seconds == "00" || seconds == "01"
                    || seconds == "02" || seconds == "03"
                    || seconds == "04" || seconds == "05"
                    || seconds == "06" || seconds == "07"
                    || seconds == "08"|| seconds == "09"){
                        clock.innerHTML = `0${hours}:0${minute}:0${seconds}`
                        clockbl.innerHTML = `0${hours}:0${minute}:0${seconds}`
                    }else{
                        clock.innerHTML = `0${hours}:0${minute}:${seconds}`
                        clockbl.innerHTML = `0${hours}:0${minute}:${seconds}`
                    }
                }
            }else{
                if (seconds == "00" || seconds == "01"
                    || seconds == "02" || seconds == "03"
                    || seconds == "04" || seconds == "05"
                    || seconds == "06" || seconds == "07"
                    || seconds == "08"|| seconds == "09"){
                        clock.innerHTML = `0${hours}:${minute}:0${seconds}`
                        clockbl.innerHTML = `0${hours}:${minute}:0${seconds}`
                    }else{
                        clock.innerHTML = `0${hours}:${minute}:${seconds}`
                        clockbl.innerHTML = `0${hours}:${minute}:${seconds}`
                    }
            }
        }else{
            if (minute == "00" || minute == "01"
                || minute == "02" || minute == "03"
                || minute == "04" || minute == "05"
                || minute == "06" || minute == "07"
                || minute == "08"|| minute == "09"){

                if (seconds == "00" || seconds == "01"
                || seconds == "02" || seconds == "03"
                || seconds == "04" || seconds == "05"
                || seconds == "06" || seconds == "07"
                || seconds == "08"|| seconds == "09"){
                    clock.innerHTML = `${hours}:0${minute}:0${seconds}`
                    clockbl.innerHTML = `${hours}:0${minute}:0${seconds}`
                    
                }else{
                    if (seconds == "00" || seconds == "01"
                    || seconds == "02" || seconds == "03"
                    || seconds == "04" || seconds == "05"
                    || seconds == "06" || seconds == "07"
                    || seconds == "08"|| seconds == "09"){
                        clock.innerHTML = `${hours}:0${minute}:0${seconds}`
                        clockbl.innerHTML = `${hours}:0${minute}:0${seconds}`
                    }else{
                        clock.innerHTML = `${hours}:0${minute}:${seconds}`
                        clockbl.innerHTML = `${hours}:0${minute}:${seconds}`
                    }
                }
            }else{
                if (seconds == "00" || seconds == "01"
                    || seconds == "02" || seconds == "03"
                    || seconds == "04" || seconds == "05"
                    || seconds == "06" || seconds == "07"
                    || seconds == "08"|| seconds == "09"){
                        clock.innerHTML = `${hours}:${minute}:0${seconds}`
                    }else{
                        clock.innerHTML = `${hours}:${minute}:${seconds}`
                        clockbl.innerHTML = `${hours}:${minute}:${seconds}`
                    }
            }
        }
}
setInterval(time, 1000)

let datehtml = document.querySelector(".date")


function date(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if (month == "01" || month == "02"|| month == "03"
        || month == "04"|| month == "05" || month == "06"
        || month == "07" || month == "08" || month == "09"){
            if (day == "01" || day == "02" || day == "03"
                || day == "04" || day == "05"|| day == "06"
                || day == "07" || day == "08" || day == "09"){
                    datehtml.innerHTML = `0${day}.0${month}.${year}`
            }else{
                datehtml.innerHTML = `${day}.0${month}.${year}`
            }
    }else{
        if (day == "01" || day == "02" || day == "03"
                || day == "04" || day == "05"|| day == "06"
                || day == "07" || day == "08" || day == "09"){
                    datehtml.innerHTML = `0${day}.${month}.${year}`
            }else{
                datehtml.innerHTML = `${day}.${month}.${year}`
            }
    }
}

setInterval(date(), 86400)


