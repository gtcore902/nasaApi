# NASA Mars Rover Photos :rocket:

This JavaScript script retrieves the most recent photos taken by rovers on Mars from the NASA API.

Link :point_right: [webpage](https://gtcore902.github.io/nasaApi/)

## Prerequisites

- NASA API Key: You need to obtain a NASA API key to access the API. You can get a key by signing up on [the NASA Developer Portal](https://api.nasa.gov/).

## Usage

1. Clone this repository to your local machine.
2. Replace the value of the `API_KEY` variable with your own NASA API key.
3. Open the `index.html` file in a web browser.

## Features

The script performs the following actions:

1. Queries NASA's API to retrieve the latest photos of the Curiosity and Perseverance rovers.
2. Displays the most recent image of each rover.
3. Displays information about the photo, including the capture date and a download link.
4. Handles errors and displays an appropriate message if the request fails.

- **search()**: This function searches for the latest photos taken by a rover for a given date. It supports the following parameters:
  - `rover`: The name of the rover ('curiosity' or 'perseverance').
  - `imageContainer`: The HTML element to display the image.
  - `textContainer`: The HTML element to display information about the photo.
  - `coordinator`: The text to append to the document title to indicate the coordinator of the photos (e.g., 'on' or 'and').

## Documentation

The documentation for the NASA API for Mars rover photos is available at [this link](https://api.nasa.gov/).

## Contributing :sunglasses:

If you wish to use or contribute to the project, follow these steps:point_down::

- Fork the project
- Create a feature branch
  > git checkout -b feature/NewFeature
- Commit your changes
  > git commit -m 'Add NewFeature'
- Push the branch
  > git push origin feature/AmazingFeature
- Open a pull Request

_[How to use Git?](https://docs.github.com/fr/get-started/using-git/about-git)_

## :mailbox_with_mail: Get in touch

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ga%C3%ABtan-tremois-a956a91a3/)
