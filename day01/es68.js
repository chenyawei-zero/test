
function timeout(time) {
    setTimeout(function () {
        console.log('完成');
    }, time)
}
var arr = [timeout(1500),timeout(1000),timeout(1000)];
Promise.all(arr).then(function (data) {
    // 所有异步操作都完成
})

Promise.race(arr).then(function (data) {
    // 某个操作先完成