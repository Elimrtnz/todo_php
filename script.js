$(document).ready(function(){
    elementTesting();
    resetItemArray();
});

//Hard coded html elements for testing;
function elementTesting(){
    $('.item').on('click', justKidding);
    $('#add').on('click', addButtonClicked);
    $('#getData').on('click', getDataClicked);
    $('.done-button').on('click', markDone);
    $('.delete-button').on('click', deleteItem);
    $('.edit').on('click',edit);
    $('.saveEdit').on('click',saveEdit);
}

//Global itemArray used to append items to DOM
var itemArray = [];
//Global itemObject used to store item title
var itemObj ={
    name: ''
}

function addButtonClicked(){
    //**************************  insertItem();
    addItem();
    clearForm();
    resetItemArray();
}

function addItem(){
    itemObj.name = $('.input').val();
    itemArray.push(itemObj);
    console.log(itemArray);
    console.log(itemObj);
    updateItemList();
}

function updateItemList(){
    console.log('updateItemList has been called');
    for(var x=0; x<itemArray.length; x++){
        addItemToDom(itemArray[x]);
    }
}

function addItemToDom(itemObj){
    console.log('addItemToDomhas been called');
    var addEditInput = $('<input>').addClass('editInput');
    var addDoneBtn = $('<button>').text('Mark as done').addClass('item done-button').on('click', markDone);
    var addDeleteBtn = $('<button>').text('Delete').addClass('delete-button').on('click', deleteItem);
    var addEditBtn = $('<button>').html('<i class="material-icons pencil">mode_edit</i>').addClass('edit').on('click', edit);
    var addSaveBtn = $('<button>').text('Save').addClass('saveEdit').on('click', saveEdit);
    var addItemName = $('<span>').text(itemObj.name).addClass('item').on('click', justKidding);

    var addListItem = $('<li>').append(addItemName,addEditInput, addDoneBtn, addDeleteBtn,addEditBtn, addSaveBtn);

    $('.items').append(addListItem);
}


function clearForm(){
    $('.input').val('');
}

function resetItemArray(){
    itemArray = [];
}

function markDone(){
    $(this).siblings('.edit').hide();
    $(this).siblings('span').addClass('done');
    $(this).hide();
    $(this).siblings('.delete-button').show();
}

function justKidding(){
    var finished = $(this).hasClass("done");
    if(finished){
        console.log('the item is marked as finished');
        $(this).removeClass("done");
        $(this).siblings('.done-button').show();
        $(this).siblings('.edit').show();
        $(this).siblings('.delete-button').hide();
    }
    else{
        console.log('the item is NOT marked as finished');
    }
}


var global_data;
function getDataClicked(){
    $.ajax( {
        url: 'getData.php',
        success: function(serverData){
            console.log('Success, data is being grabbed from the server!');
            global_data = serverData;

            for(var i=0; i < serverData.data.length ; i++) {
                itemArray.push(serverData.data[i]);
            }
            updateItemList();
            resetItemArray();
        },
        error: function (response) {
            console.log("not working!");
        },
        dataType: 'json',
        method: 'post'
    });
}

function insertItem(){
    var nameOfItem = $('.input').val();

    $.ajax({
        method: 'POST',
        data: {name:nameOfItem},
        url: 'insert.php',
        success: function(result){
            console.log('insert is working!');
        },
        error: function (response) {
            console.log("insert not working!");
        },
        dataType: 'text'
    })
}

function deleteItem(){
    console.log('deleteItem has been called');
    var deleteSomething = $(this).siblings('span').text();
    //call deleteFromDB here
    //*********************************************************** deleteFromDB(deleteSomething);
    $(this).parent().remove();
}

function deleteFromDB(deleteParam){
    var nameOfDeleteItem = deleteParam;

    $.ajax({
        method: 'POST',
        data: {deleteItem:nameOfDeleteItem},
        url: 'delete.php',
        success: function(result){
            console.log('delete is working!');
        },
        error: function (response) {
            console.log("delete not working!");
        },
        dataType: 'text'
    })
}

var editInputText = null;
function edit(){
    console.log('edit being called');
    editInputText = $(this).siblings('span').text();
    console.log('editInputText : '+editInputText);
    $(this).hide();
    $(this).siblings('span').hide();
    $(this).siblings('.done-button').hide();
    $(this).siblings('.saveEdit').show();
    $(this).siblings('.editInput').show().val(editInputText);
}

function saveEdit(){
    console.log('saveEdit being called');
    var newInputText = $(this).siblings('.editInput').val();
    console.log('newInputText: '+ newInputText);

    //**************************************************************************  updateDB(newInputText);

    $(this).siblings('.editInput').hide();
    $(this).siblings('span').show().text(newInputText);
    $(this).siblings('.done-button').show();
    $(this).siblings('.edit').show();
    $(this).hide();
}

function updateDB(updateParam){
    console.log('updateDB being called');
    var nameOfUpdateItem = updateParam;

    $.ajax({
        method: 'POST',
        data: {updateItem:nameOfUpdateItem, oldName:editInputText},
        url: 'update.php',
        success: function(result){
            console.log('update.php is working!');
        },
        error: function (response) {
            console.log("update not working!");
        },
        dataType: 'text'
    })
}

