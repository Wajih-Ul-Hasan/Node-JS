todoList = [{item:'Buy Milk' , dueDate: '8/14/2024'}];
displayItems();


function addTodo(){
    let input = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let element1 = input.value;
    let element2 = dateElement.value;
    todoList.push({item:element1 , dueDate:element2});
    input.value = '';
    dateElement.value = '';

    displayItems();
}


function displayItems(){
    let output = document.querySelector('.todo-container');
    let newHtml = '';

    for(let i = 0 ; i < todoList.length; i++)
    {
        let {item,dueDate} = todoList[i];
        newHtml += `
                    <span>${item}</span>
                    <span>${dueDate}</span>
                    <button class="btn-del" onclick = "todoList.pop(${i}); displayItems();" >
                    Delete</button>
                    `;
    }

    output.innerHTML = newHtml;
}