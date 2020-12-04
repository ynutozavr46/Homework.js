// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

function startday(paste,cb){
    console.log('Треба почистити зуби!')
    setTimeout(()=>{
        if (!paste){
            cb('Закінчилась паста',null)
            }else {
            cb(null,'Done')
        }
    },500)
}
function eat(food,cb){
    console.log('Make some food')
    setTimeout(()=>{
        if (!food){
            cb('Go buy some food',null)
        }else{
            cb(null,'Done')
        }
    },1000)

}

function videos(youtube,cb){
    console.log('Watch a few videos')
    setTimeout(()=>{
        if (!youtube){
            cb('Ok watch tv',null)
        }else {
            cb(null,'Done')
        }
    },1500)
}

function work(js,cb){
    console.log('Go work')
    setTimeout(()=>{
        if (!js){
            cb('LOL not js what problem?',null)
        }else {
            cb(null,'Ok lets make some work!')
        }
    },2000)
}

function relax(play,cb){
    console.log('i need to relax')
    setTimeout(()=>{
        if (!play){
            cb('Go to walk',null)
        }else {
            cb(null,'Done')
        }
    },2500)
    }

    function watch(tutorials,cb){
        console.log('i need to study')
        setTimeout(()=>{
            if (!tutorials){
                cb('Ok again work...',null)
            }else {
                cb(null,'Done')
            }
        },3000)
    }

    function eatagain(food,cb){
        console.log('i need to eat')
        setTimeout(()=>{
            if (!food){
                cb('Go to buy some food',null)
            }else {
                cb(null,'Done')
            }
        },3500)
    }