// const name = 'Joao';

// function takeName([...test]){
//     return function(){
//         console.log(test)
//     }
// };

// const algo = takeName([1, 2, 3, 4])
// algo()


function f1(callback) {
    setTimeout(function(){
        console.log('f1')
        if(callback) f1callback()
    },5000)
}
function f2(callback) {
    setTimeout(function(){
        console.log('f2')
        if(callback) f2callback()
    },800)
}
function f3(callback) {
    setTimeout(function(){
        console.log('f3')
        if(callback) f3callback()
    },1000)
}




// f1(function() {
//     f2(function(){
//         f3(function(){
//             console.log('Ola')
//         })
//     })
// })

f1(f1callback)

function f1callback(){
    f2(f2callback)
}

function f2callback(){
    f3(f3callback)
}

function f3callback(){
    console.log('Ola Mundo')
}



