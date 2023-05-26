// Step 1: Create a class named Video
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  // Step 2: Create a method called watch()
  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// Step 3: Instantiate a new Video instance and call the watch() method
const video1 = new Video("Video 1", "Uploader 1", 120);
video1.watch();

// Step 4: Instantiate a second Video instance with different values
const video2 = new Video("Video 2", "Uploader 2", 180);
video2.watch();

// Step 5: Use an array to store data for five Video instances
const videoData = [
  ["Video 1", "Uploader 1", 120],
  ["Video 2", "Uploader 2", 180],
  ["Video 3", "Uploader 3", 240],
  ["Video 4", "Uploader 4", 300],
  ["Video 5", "Uploader 5", 360]
];

// Step 6: Loop through the array to instantiate those instances
const videos = [];
for (const data of videoData) {
  const video = new Video(data[0], data[1], data[2]);
  videos.push(video);
}
