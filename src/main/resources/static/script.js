;([1,2,3,4]).forEach(id => document.getElementById("b" + id).onclick = function() {
//    document.getElementById("a" + id).play();
 client.send(
            '/app/play',
            {},
            JSON.stringify({instrument: 'a'+id})
        )
});

let sock;
let client;

window.onload = function() {
    sock = new SockJS('/animal-mania') // Creates the web socket connection
    client = Stomp.over(sock); // Wraps socket into Stomp object to perform High level operations

    client.connect({}, function() {
    client.subscribe('/instruments/play', function(data) {
//        console.log(JSON.parse(data.body)); //data.body = aud1, aud2..etc..data.body.instrument would be the ID
            let body = JSON.parse(data.body);
            console.log(body);
            document.getElementById(body.instrument).play();
        })
    })

}