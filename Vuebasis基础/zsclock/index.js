
    window.onload = function () {
      // 定时器，每隔 1 秒执行 1 次
      setInterval(() => {
        var dt = new Date()
        var HH = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()

        // 为页面上的元素赋值
        // innerHTML和html都可以获得某个dom元素中的内容，设定某个dom元素中的内容
        // 前者是js的，后者是jquery的
        document.querySelector('#HH').innerHTML = padZero(HH)
        document.querySelector('#mm').innerHTML = padZero(mm)
        document.querySelector('#ss').innerHTML = padZero(ss)
      }, 1000)
    }

    // 补零函数
    function padZero(n) {
      return n > 9 ? n : '0' + n
    }
  