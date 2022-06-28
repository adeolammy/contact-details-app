// console.dir(document)
// console.dir(document.URL)
// console.dir(document.timeline)
// console.dir('kelly')
// console.log(document.title)
// console.log(document.body)
// console.log(document.head)
// console.log(document.all[25])
// document.all[23].textContent = 'first persons info'
// document.all[24].textContent = 'Additional information'
// document.all[25].textContent = 'Not necessary'
// console.log(document.forms[0] ); 


// GET ELEMENT BY ID
// let header = document.getElementById('main-header')
// header.textContent = 'THIS IS GONNA BE GREAT'







    //THE form CONTAINER FOR BOTH D INPUT FIELD AND SUBMIT BTN
let form = document.getElementById('addform');

// THE UL FOR ALL THE LI
let itemList =  document.getElementById('items');

// FILTER THE SEARCH
let filter =  document.getElementById('filters');

form.addEventListener('submit', addItems);

// FOR DELETING THE LI
itemList.addEventListener('click', removeItem);

// filters
filter.addEventListener('keyup', filterItem);

function addItems(e) {
    e.preventDefault();
    
    
            // input field to add NAME/ OCCUPATION / PHONE NUMBER
            // input field to add NAME/ OCCUPATION / PHONE NUMBER
    let newItems = document.getElementById('addDetails').value;

    let pItems = document.getElementById('occp_Details').value;

    let aItems = document.getElementById('phone_Details').value;

    let comments_field = document.getElementById('comment').value;

           

        // NAME FEILD PART NAME FEILD PART  NAME FEILD PART NAME FEILD PART NAME FEILD PART
        // NAME FEILD PART NAME FEILD PART  NAME FEILD PART NAME FEILD PART NAME FEILD PART
    let li = document.createElement('li');

    li.className = 'list-group-item text-black  h4';
    
    li.appendChild(document.createTextNode(newItems))


    //
    // CREATING THE DELETE BTN   CREATING THE DELETE BTN    CREATING THE DELETE BTN CREATING THE DELETE BTN
    // CREATING THE DELETE BTN   CREATING THE DELETE BTN    CREATING THE DELETE BTN CREATING THE DELETE BTN

    let deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger float-right py-1 px-2 delete'
    

    deleteBtn.appendChild(document.createTextNode('\u{02716}'))

    li.appendChild(deleteBtn)

    //  CREATING THE EDIT BTN    CREATING THE EDIT BTN  CREATING THE EDIT BTN   CREATING THE EDIT BTN
    //  CREATING THE EDIT BTN    CREATING THE EDIT BTN  CREATING THE EDIT BTN   CREATING THE EDIT BTN

    let edit_Btn = document.createElement('button');

    edit_Btn.className = 'btn btn-success float-right mr-1 py-1 px-2'

    edit_Btn.appendChild(document.createTextNode('\u{0270E}'))
    li.appendChild(edit_Btn)

    // OCCUPATION PART OCCUPATION PART OCCUPATION PART OCCUPATION PART OCCUPATION PART OCCUPATION PART
    // OCCUPATION PART OCCUPATION PART OCCUPATION PART OCCUPATION PART OCCUPATION PART OCCUPATION PART

        let p = document.createElement('p');

            p.className = 'text-black-50 font-weight-bold h6'

            p.appendChild(document.createTextNode(pItems))

            li.appendChild(p)
    


    // NUMBER PART NUMBER PART NUMBER PART NUMBER PART NUMBER PART NUMBER PART NUMBER PART NUMBER PART 
    // NUMBER PART NUMBER PART NUMBER PART NUMBER PART NUMBER PART NUMBER PART NUMBER PART NUMBER PART 
    
     let a = document.createElement('a');

        a.className = 'text-primary h6 d-flex';

        a.appendChild(document.createTextNode(aItems));

         li.appendChild(a);
    

         



        //  COMMENT FIELD   COMMENT FIELD   COMMENT FIELD   COMMENT FIELD   COMMENT FIELD   COMMENT FIELD 
        //  COMMENT FIELD   COMMENT FIELD   COMMENT FIELD   COMMENT FIELD   COMMENT FIELD   COMMENT FIELD 

        let textarea_field = document.createElement('textareas');
         
        textarea_field.className = 'text-black text-lowercase h6 text-center text-justify font-weight-normal' ;
        
       
       


        // let    textarea_fields = textarea_field.slice(0, 129).concat('...');

  


        textarea_field.appendChild(document.createTextNode(comments_field));

        li.appendChild(textarea_field);

          itemList.appendChild(li);
}




// REMOVE ITEMS FROM THE UL
function removeItem(e) {
    if (e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li)
        // console.log('working right');
    }
    
}




// FILTER ITEM IN THE SEARCH INPUT
    function filterItem(e) {
        let text = e.target.value.toLowerCase();

        let items = itemList.getElementsByTagName('li')

        Array.from(items).forEach((filter_item)=>{

        // let itemName = filter_item.firstChild.textContent;
        let itemName = filter_item.firstElementChild.textContent;

                // console.log(itemName);

        if (itemName.toLLowerCase().indexOf(text) != -1){
            filter_item.style.display = 'block'
        }else{
            filter_item.style.display = 'none'
        }
        });
    }




