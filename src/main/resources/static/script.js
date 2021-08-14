;([1,2,3,4]).forEach(id => document.getElementById("b" + id).onclick = function() {
    document.getElementById("a" + id).play();
});