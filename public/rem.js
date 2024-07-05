function remSize() {
    var deviceWidth = document.documentElement.clientWidth
    var deviceHeight = document.documentElement.cilentHeight
    if (deviceWidth >= 750) {
        deviceWidth = 750
    } else if (deviceWidth <= 350) {
        deviceWidth = 350
    } 
    // else if(cilentHeight >= 1000){
    //     deviceHeight = 1000
    // } else if(deviceHeight <= 677){
    //     deviceHeight = 677
    // }

    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
remSize()
window.onresize = function () {
    remSize()
}