function addListsFun() {
    var allListContainer = document.getElementById('allListContainer');
    var newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode('New Item'));
    allListContainer.appendChild(newItem);
}
// to remove the list

function removeListFun() {
    var allListContainer = document.getElementById('allListContainer');
    var removelist = allListContainer.lastChild;
    allListContainer.removeChild(removelist)
}

document.getElementById('btn1').addEventListener('click', addListsFun);
document.getElementById('btn2').addEventListener('click', removeListFun);