function delivery(order, shoppers) {
    let shopTime = [], customerWaitTime = [];

    for (let i = 0, x = shoppers.length; i < x; i++) {
        shopTime.push(parseInt((shoppers[i][0]+order[0])/shoppers[i][1]+shoppers[i][2]));
        console.log(shopTime[i]+' '+(order[1]+order[2]));
        //(shopTime[i] > order[1]+order[2])?customerWaitTime.push(false):customerWaitTime.push(false);
        (order[1] - shopTime[i] >= 0)?customerWaitTime.push(false):customerWaitTime.push(true);
    }
    return customerWaitTime;
}