# Self-Driving Car using JavaScript

## Description

This project aims to simulate a self-driving car using JavaScript. It focuses on implementing basic autonomous driving features such as obstacle detection, and lane keeping. The simulation runs in a web browser and uses HTML5 Canvas for rendering.

## Features

1. Possibility of creating a model world by hand and assimilating the Open Street Map data.
2. Design the world by adding various traffic markers.
3. Play with and find the specific Neural Network Configuration for the efficient car.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
2. Go to the index.html file inside the world directory and create your world, make sure to add a car in the world.
3. Save the world, which is stored as browser local storage data.
4. Navigate to the index.html file in the root directory that contains the actual application.
5. The application contains a save button to save the desired neural network in the local memory that you can observe as the car moves, and on each reload that specific Neural Network configuration is loaded.

## Illustrations

![Main Image](/ss/image.png)

![World Editor](/ss/image-1.png)

### Open Street Map

The data extraction for OSM data was done via the Overpass Turbo website(https://overpass-turbo.eu/), which allowed easy extraction of data.

The code snippet that best fit me for the project was:

```
    [out:json];
 (
   way['highway']
   ['highway' !~'pedestrian']
   ['highway' !~'footway']
   ['highway' !~'cycleway']
   ['highway' !~'path']
   ['highway' !~'service']
   ({{bbox}});
 );
 out body;
 >;
 out skel;
```
