var bear = 0;
var cat = 0;
var cow = 0;
var coyote = 0;
var dog = 0;
var donkey = 0;
var duck = 0;
var elephant = 0;
var fox = 0;
var goat = 0;
var lion = 0;
var monkey = 0;
var tiger = 0;
var wolf = 0;

var detection_count = 0;

function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OCAbwVKfN/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("got results")
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        if (results[0].label == "Bear") {
            animal = "Detected - Bear";
            detection_count += 1;
            image = "bear.gif";
            display_results();
        } else if (results[0].label == "Cat") {
            animal = "Detected - Cat";
            detection_count += 1;
            image = "cat.gif";
            display_results();
        } else if (results[0].label == "Cow") {
            animal = "Detected - Cow";
            detection_count += 1;
            image = "cow.gif";
            display_results();
        } else if (results[0].label == "Coyote") {
            animal = "Detected - Coyote";
            detection_count += 1;
            image = "coyote.png";
            display_results();
        } else if (results[0].label == "Dog") {
            animal = "Detected - Dog";
            detection_count += 1;
            image = "dog.gif";
            display_results();
        } else if (results[0].label == "Donkey") {
            animal = "Detected - Donkey";
            detection_count += 1;
            image = "donkey.png";
            display_results();
        } else if (results[0].label == "Duck") {
            animal = "Detected - Duck";
            detection_count += 1;
            image = "duck.gif";
            display_results();
        } else if (results[0].label == "Elephant") {
            animal = "Detected - Elephant";
            detection_count += 1;
            image = "elephant.gif";
            display_results();
        } else if (results[0].label == "Fox") {
            animal = "Detected - Fox";
            detection_count += 1;
            image = "fox.gif";
            display_results();
        } else if (results[0].label == "Goat") {
            animal = "Detected - Goat";
            detection_count += 1;
            image = "goat.gif";
            display_results();
        } else if (results[0].label == "Lion") {
            animal = "Detected - Lion";
            detection_count += 1;
            image = "lion.gif";
            display_results();
        } else if (results[0].label == "Monkey") {
            animal = "Detected - Monkey";
            detection_count += 1;
            image = "monkey.gif";
            display_results();
        } else if (results[0].label == "Tiger") {
            animal = "Detected - Tiger";
            detection_count += 1;
            image = "tiger.gif";
            display_results();
        } else if (results[0].label == "Wolf") {
            animal = "Detected - Wolf";
            detection_count += 1;
            image = "wolf.gif";
            display_results();
        } else if (results[0].label == "Background Noise") {
            document.getElementById("img_animals").src = "default_image.png";
            document.getElementById("detection_count").innerHTML = "Confidence: " + (results[0].confidence * 100).toFixed(2) + "%";
            document.getElementById("recognized_animal").innerHTML = "Detected - Background Noise";
        }

        function display_results() {
            document.getElementById("detection_count").innerHTML = "Confidence: " + (results[0].confidence * 100).toFixed(2) + "%";
            document.getElementById("recognized_animal").innerHTML = animal;
            document.getElementById("img_animals").src = image;

            document.getElementById("detection_count").style.color = "rgb(" + random_r + ", " + random_g + ", " + random_b + ")";
            document.getElementById("recognized_animal").style.color = "rgb(" + random_r + ", " + random_g + ", " + random_b + ")";    
        }
    }
}