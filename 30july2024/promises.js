//Promises,Promise.all,Promise.allSettled
function asyncTask(name,delay,shouldReject){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(shouldReject){
                reject(`${name} failed`)
            } else {
                resolve(`${name} completed`)
            }
        },delay);
    })
}

asyncTask("Hello!",500,false).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

const task1 = asyncTask('Task 1', 1000, false)
const task2 = asyncTask('Task 2', 2000, false)
const task3 = asyncTask('Task 3', 3000, true)

Promise.all([task1, task2, task3])
    .then(results => {
        console.log('All tasks completed:', results)
    })
    .catch(error => {
        console.log('One of the tasks failed:', error)
    });

Promise.allSettled([task1,task2,task3])
    .then((result) =>{
        console.log('successs',result)
    })
Promise.race([task1,task2,task3])
    .then((result)=>{
        console.log('success=>',result)
    }).catch((err)=>{
        console.log('err=>',err)
    })

    // Hello! completed
    // success=> Task 1 completed
    // successs [
    //   { status: 'fulfilled', value: 'Task 1 completed' },
    //   { status: 'fulfilled', value: 'Task 2 completed' },
    //   { status: 'rejected', reason: 'Task 3 failed' }
    // ]
    // One of the tasks failed: Task 3 failed