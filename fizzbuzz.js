

for (var counter = 1; counter < 50; counter = counter + 1) {
  if (counter % 3 === 0 && counter % 5 === 0) {
    var fizzbuzz = document.createElement("div");
    fizzbuzz.innerHTML = '<h4>FIZZBUZZ</h4>';
    fizzbuzz.className = 'fizzbuzz';
    document.getElementById('welcome').appendChild(fizzbuzz);
  } else if (counter % 3 === 0) {
    var fizz = document.createElement("div");
    fizz.innerHTML = '<h4>FIZZ</h4>';
    fizz.className = 'fizz';
    document.getElementById('welcome').appendChild(fizz);
  } else if (counter % 5 === 0) {
    var buzz = document.createElement("div");
    buzz.innerHTML = '<h4>BUZZ</h4>';
    buzz.className = 'buzz';
    document.getElementById('welcome').appendChild(buzz);
  } else {
    var none = document.createElement("div");
    none.innerHTML = '<h4> '+counter+' </h4>';
    none.className = 'none';
    document.getElementById('welcome').appendChild(none);
  }
}


AFTER
for (var counter = 1; counter < 50; counter = counter + 1) {
  var divElement = document.createElement("div");
  if (counter % 3 === 0 && counter % 5 === 0) {
    divElement.innerHTML = '<h4>FIZZBUZZ</h4>';
    divElement.className = 'fizzbuzz';
  } else if (counter % 3 === 0) {
    divElement.innerHTML = '<h4>FIZZ</h4>';
    divElement.className = 'fizz';
  } else if (counter % 5 === 0) {
    divElement.innerHTML = '<h4>BUZZ</h4>';
    divElement.className = 'buzz';
  } else {
    divElement.innerHTML = '<h4> '+counter+' </h4>';
    divElement.className = 'none';
  }
  document.getElementById('welcome').appendChild(divElement);
}
