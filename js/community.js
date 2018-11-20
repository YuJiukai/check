window.onload = function() {
    function getStyle(obj,attr) {
        if(obj.currentStyle) {
            return obj.currentStyle[attr];
        }
        else {
            return getComputedStyle(obj,false)[attr];
        }
    }

    var preBtn = document.getElementById('pre');
    var nexBtn = document.getElementById('next');
    var aBox = document.getElementsByClassName('box');

    var arr = [];
    
    for (var i = 0 ; i < aBox.length ; i++) {//存储轮播模块的位置
        arr.push( [ parseInt(getStyle(aBox[i],'left')) , parseInt(getStyle(aBox[i],'top')) , getStyle(aBox[i],'opacity')*100 , getStyle(aBox[i],'zIndex') ] );
    }
    // console.log(arr);
    preBtn.onclick = function() {//向前
        arr.push(arr[0]);
        arr.shift();
        for(var i = 0 ; i < aBox.length ; i++) {
            aBox[i].style.zIndex = arr[i][3];
            startMove(aBox[i],{left : arr[i][0] , top : arr[i][1] , opacity : arr[i][2] });
        }
    }

    nexBtn.onclick = function() {//向后
        arr.unshift(arr[arr.length-1]);
        arr.pop();
        for(var i = 0 ; i < aBox.length ; i++) {
            aBox[i].style.zIndex = arr[i][3];
            startMove(aBox[i],{left : arr[i][0] , top : arr[i][1] , opacity : arr[i][2] });
        }
    }




};