<!DOCTYPE html>
<html>
<head>
    <meta charset = "UTF-8">
    <title>PHP To Do List</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Shadows+Into+Light+Two" rel="stylesheet">
    <link href ="main.css" rel="stylesheet">
    <meta name ="viewport" conent="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script src="script.js"></script>

</head>

<body>
<div class="list">
    <h1 class ="header">To Do List</h1>
    <ul class="items">
        <li id="listItem">
            <span class="item">Drink Beer</span>
            <input class="editInput">
            <button class="item done-button">Mark as done</button>
            <button class="delete-button">Delete</button>
            <button class="edit"><i class="material-icons pencil">mode_edit</i></button>
            <button class="saveEdit">Save</button>
        </li>
        <!-- <li>
            <span class="item done">Learn PHP</span>
        </li> -->
    </ul>

    <form class="item-add">
        <input type="text" name="name" placeholder="Type a new item here." class="input" autcomplete="off" required>
        <input id="add" type="button" value="Add" class="submit">
        <input id="getData" type="button" value="Get Saved data " class="submit">
    </form>

</div>
</body>
</html>