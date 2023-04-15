for(i = 0; i < 3; i++){
    console.log(i, 'looping')
    }
    
    function recurse(num){
    //console.log(num)
    if(num > 2){
    return
    }else{
    console.log(num, 'recursion')
    recurse(num + 1)
    //console.log(num)
    }
    //console.log(num)
    }
    recurse(0)
    