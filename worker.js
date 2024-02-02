function performHeavyComputation() {
    var sum = 0;
    for (var i = 0; i < 3000000000; i++) {
        sum += i;
    }
    return sum;
}

// Listen for messages from the main thread
self.addEventListener('message', function(event) {
    var message = event.data;

    if (message === 'start') {
        var result = performHeavyComputation();
        // Send the result back to the main thread
        self.postMessage(result);
    }
});
