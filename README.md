# AlgoReady API Server

The AlgoReady API Server is a backend server that provides access to a collection of Data Structures and Algorithms video resources. It serves as the backend for the AlgoReady For Free Android app, enabling users to access curated video data through a simple API.

## APIAlgoReady

Published by Shrey Kharbanda on July 15, 2023

## Features
The AlgoReady API Server incorporates the following features:

* [Mongoose](https://mongoosejs.com/): Uses Mongoose library to interact with a MongoDB database.
* [Express Framework](https://expressjs.com/): Implements the Express framework to handle HTTP requests and define API routes.
* [CORS Middleware](https://www.npmjs.com/package/cors): Utilizes the CORS middleware to handle Cross-Origin Resource Sharing.
* [Serverless Deployment](https://www.npmjs.com/package/serverless-http): Supports serverless deployment using the serverless-http package.

## Installation

To set up the AlgoReady API Server locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/shreykharbanda31/APIAlgoReady.git
```
2. Navigate to the project directory:
```bash
cd APIAlgoReady
```
3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```
2. The server will run on
```bash
http://localhost:3000
```

## API Endpoints

### GET /youtubedata

This endpoint returns a collection of Data Structures and Algorithms video resources in JSON format.

#### Example Response

```json
[
  {
    "videoName": "Big-O",
    "videoId": "ei-A_wy5Yxw",
    "videoImg": "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/BigO.png"
  },
  {
    "videoName": "Arrays",
    "videoId": "tI_tIZFyKBw",
    "videoImg": "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Arrays.png"
  },
  // ... more video resources
]
```

## Contributing

Contributions to the AlgoReady API Server are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature/your-feature
```
3. Make your changes and commit them: 
```bash
git commit -m "Add your feature"
```
4. Push to the branch: 
```bash
git push origin feature/your-feature
```
5. Submit a pull request.

## License
The AlgoReady API Server is released under the [MIT License](https://opensource.org/licenses/MIT).

## Report Issues
Notice any issues with a repository? Please file a github issue in the repository.

## Contact
If you have any questions, suggestions, or feedback, please feel free to reach out at [shrey.kharbanda@nyu.edu](mailto:shrey.kharbanda@nyu.edu).

Enjoy using the AlgoReady API Server!
