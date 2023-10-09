let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit' , addItem);

//Add item
function addItem(e){
    e.preventDefault();

     // Get input value for item name
     let newItemName = document.getElementById('item').value;
     let newItemDescription = document.getElementById('item-description').value;

     //Create new li element
     let li = document.createElement('li');
     //Add Class
     li.className = 'list-group-item';
     //Add Text Node with input value
     li.appendChild(document.createTextNode(newItemName + ' ' + newItemDescription));

     //Create Delete Button Element
     let deleteBtn = document.createElement('button');
     //Add Classes to Delete Button
     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
     //Append text Node
     deleteBtn.appendChild(document.createTextNode('X'));

     //Create Edit button
     let editBtn = document.createElement('button');
     //Add Classess to Edit Button
     editBtn.className = 'btn btn-primary btn-sm float-right edit';
     //Append text Node
     editBtn.appendChild(document.createTextNode('Edit'));

     //Append Delete and Edit Button's to li
     li.appendChild(deleteBtn);
     li.appendChild(editBtn);

     //Append li to Item list (ul)
     itemList.appendChild(li);

     // Clear input fields after adding an item
     document.getElementById('item').value = '';
     document.getElementById('item-description').value = '';
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
function filterItems(e) {
    // Convert text to lowercase
    let text = e.target.value.toLowerCase();
  
    // Get List
    let items = itemList.getElementsByTagName('li');  // array of node
  
    // Convert to array
    Array.from(items).forEach(function (item) {

        let itemName = item.firstChild.textContent;
        let itemDescription = item.childNodes[1].textContent;
  
        if (itemName.toLowerCase().indexOf(text) != -1 || itemDescription.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
  }