// 1st Challenge

//Explanation:
// The Promise.all function is used to handle an array of promises. It takes an array of promises as its argument and returns a new promise that resolves to an array of resolved values when all the input promises are fulfilled. If any of the promises in the array are rejected, the returned promise is rejected.

// In the example provided, promise1 is a resolved promise with a value of 3 created using Promise.resolve(3). promise2 is a regular value of 42, not a promise. promise3 is a promise that resolves to the string 'foo' after a delay of 3000 milliseconds using setTimeout.

// When resolvePromises is called with the array [promise1, promise2, promise3], Promise.all is invoked with this array. It waits for all the promises in the array to settle, whether they are resolved or rejected. In this case, promise1 is already resolved, promise2 is a regular value (which is considered as already fulfilled), and promise3 will be resolved after a delay of 3000 milliseconds.

// The returned promise from Promise.all is then chained with .then, which receives an array of resolved values. In this example, the resolved values will be [3, 42, 'foo']. The .catch block is also attached to handle any rejections that might occur during the execution of the promises.

// Finally, the resolvePromises function returns the array of resolved values or an empty array if any of the promises were rejected. The then block in the example logs the resolved values to the console.

// The expected output will be:
//Resolved values: [3, 42, 'foo']


//2nd Challenge


 document.getElementById("cityForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            var city1Lat = document.getElementById("city1Lat").value;
            var city1Lng = document.getElementById("city1Lng").value;
            var city2Lat = document.getElementById("city2Lat").value;
            var city2Lng = document.getElementById("city2Lng").value;

            var sunrisePromise1 = fetchSunriseTime(city1Lat, city1Lng);
            var sunrisePromise2 = fetchSunriseTime(city2Lat, city2Lng);

            Promise.all([sunrisePromise1, sunrisePromise2])
                .then(function(results) {
                    var sunriseTime1 = results[0];
                    var sunriseTime2 = results[1];

                    var resultContainer = document.getElementById("resultContainer");
                    resultContainer.innerHTML = "Sunrise time for City 1: " + sunriseTime1 + "<br>";
                    resultContainer.innerHTML += "Sunrise time for City 2: " + sunriseTime2;
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
        });

        function fetchSunriseTime(latitude, longitude) {
            return new Promise(function(resolve, reject) {
                var apiUrl = "https://api.sunrise-sunset.org/json?lat=" + latitude + "&lng=" + longitude;

                fetch(apiUrl)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(data) {
                        resolve(data.results.sunrise);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        }



