function depositProfit(deposit, rate, threshold) {
    let times = 0;
    while (deposit < threshold) {
        deposit += ((rate / 100) * deposit);
        times++;
    }
    return times;
}