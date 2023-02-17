let inputArea = document.getElementById('inputArea')

let listItem = document.getElementById('listItem')

let btn = document.getElementById('btn')
let body = document.querySelector('body')

btn.addEventListener('click', () => {
    let newList = document.createElement('li')
    newList.innerText = inputArea.value
    listItem.appendChild(newList)
    newList.classList.add('list')
    inputArea.value = ""
    newList.addEventListener('dblclick', function() {
        listItem.removeChild(newList)
    })
})
body.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        let newList = document.createElement('li')
        newList.innerText = inputArea.value
        listItem.appendChild(newList)
        newList.classList.add("list")
        inputArea.value = ""
        newList.addEventListener('dblclick', function() {
            listItem.removeChild(newList)
        })
    }    
})