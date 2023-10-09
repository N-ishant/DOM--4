let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit' , addItem);

//Add item
function addItem(e){
    e.preventDefault();
    //console.log(1);

    //Get input Value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button elelment
    let deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Create Edit Button
    let editBtn = document.createElement('button');
    //Add Classes to Edit button
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    //Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append Delete and Edit buttons to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    //Append li to itemList(ul)
    itemList.appendChild(li);

    // Clear input fields after adding an item
    document.getElementById('item').value = '';
}

// Delete event
itemList.addEventListener('click', removeItem);

// Remove item
function removeItem(e) {

    if(e.target.classList.contains('delete')){  // button have a class of "delete"
      if(confirm('Are you Sure?')){
        let li = e.target.parentElement;        // li is the parentElement of button
        itemList.removeChild(li);               //li is the child of itemList(ul);
      }
    }
  }

// Placeholder event listener for the "Edit" button
itemList.addEventListener('click' , editButton);

function editButton(e){
    //console.log(e.target);  //button element
    if(e.target.classList.contains('edit')){
         // Handle the edit functionality here when you implement it.
         // For now, you can log a message as a placeholder.
         console.log('Edit Button Clicked');
    }
}

// Filter Event
filter.addEventListener('keyup' , filterItems);

// Filter Items
function filterItems(e){
    // Convert Text to lowerCase
    let text = e.target.value.toLowerCase();
    //console.log(text);

    //Get List
    let items = itemList.getElementsByTagName('li');
    //console.log(items);

    // Convert "HTML Collection" into an ARRAY
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}