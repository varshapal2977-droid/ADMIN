//setTimeout(()=>
   // console.log("after 10seconds")
////,2*1000)
//setInterval(() => {
  
//}, interval);
//const timerID = setInterval(() => {console.log("set interval")}, 1000)
// timeoutID = setTimeout(() => {clearInterval(timerID);console.log("cleared interval")},1000)
//
//let num = 1;
//const timerID = setInterval(() => {
 //if (num == 10) clearInterval(timerID);console.log(num); num++;}, 1000);
 const name = document.querySelector('#name')
 const btn = document.querySelector('.btn')
 const list = document.querySelector('.list')
 btn.addEventListener('click', () => {
     const li = document.createElement('li')
     const deleteBtn = document.createElement('button')
     deleteBtn.innertext = 'Delete'
     li.innertext = name.value;
      deleteBtn.addEventListener('click', () => {
          list.removeChild(li)
      })
     list.appendChild(li)
     li.appendChild(deleteBtn)
     name.value = ''
    
  })