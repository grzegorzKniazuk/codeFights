function lateRide(n) {
    let hour = (parseInt(n/60)).toString(),
        minutes = (n-(hour*60)).toString(),
        time = hour.concat(minutes),
        sum = 0;
    for (let i=0;i<time.length;i++) {
        sum += parseInt(time[i]);
    }
    return sum;
}