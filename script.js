document.getElementById('btn1').addEventListener('click', function() {
    var currentColor = document.body.style.backgroundColor;
    
    if (currentColor === 'rgb(173, 216, 230)') {
        document.body.style.backgroundColor = '#FFCCCC'; // light red
    } else {
        document.body.style.backgroundColor = '#ADD8E6'; // light blue
    }
});

document.getElementById('btn2').addEventListener('click', function() {
    var sum = calculateSum(3000000000);
    alert('Sum from 1 to 3,000,000,000: ' + sum);
});

function calculateSum(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


document.getElementById('btn3').addEventListener('click', function() {
    var currentColor = document.body.style.backgroundColor;
    
    if (currentColor === 'rgb(173, 216, 230)') {
        document.body.style.backgroundColor = '#FFCCCC'; // light red
    } else {
        document.body.style.backgroundColor = '#ADD8E6'; // light blue
    }
});

document.getElementById('btn4').addEventListener('click', function() {
    if (typeof Worker !== 'undefined') {
        var worker = new Worker('worker.js');

        // Listen for messages from the worker
        worker.onmessage = function(event) {
            alert('Computation complete! Result: ' + event.data);
        };

        // Start the worker
        worker.postMessage('start');
    } else {
        alert('Web workers are not supported in this browser.');
    }
});