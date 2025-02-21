# Bangladesh GeoAPI

Bangladesh GeoAPI is a free and open API providing geographical data of Bangladesh, including divisions, districts, and upazilas.

## Features
- Retrieve all divisions, districts, and upazilas.
- Get districts of a specific division.
- Get upazilas of a specific district.
- Connected to MongoDB Atlas for data storage.

## Technology
- Node Js
- Express Js
- Mongodb Atlas

## Live Demo
[Click me](https://bdgeo.vercel.app/)

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/thecodemaster12/bdgeo.git
cd bdgeo
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGODB=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB Atlas connection string.

## Usage

Start the server:

```sh
npm start
```

The server will run at `http://localhost:3000`.

## API Endpoints

### Get All Divisions
```sh
GET /api/divisions
```
**Response:**
```json
[
    { "id": 1, "name": "Dhaka", "bengaliName": "ঢাকা" },
    { "id": 2, "name": "Chattogram", "bengaliName": "চট্টগ্রাম" }
]
```

### Get All Districts
```sh
GET /api/districts
```
**Response:**
```json
[
    { "id": 1, "name": "Dhaka", "bengaliName": "ঢাকা" },
    { "id": 2, "name": "Comilla", "bengaliName": "কুমিল্লা" }
]
```

### Get All Upazilas
```sh
GET /api/upazilas
```
**Response:**
```json
[
    { "id": 1, "name": "Savar", "bengaliName": "সাভার" },
    { "id": 2, "name": "Mirpur", "bengaliName": "মিরপুর" }
]
```

### Get Districts of a Division
```sh
GET /api/division/{division_name}
```
**Example:**
```sh
GET /api/division/Dhaka
```
**Response:**
```json
[
    { "id": 1, "name": "Dhaka", "bengaliName": "ঢাকা" },
    { "id": 2, "name": "Gazipur", "bengaliName": "গাজীপুর" }
]
```

### Get Upazilas of a District
```sh
GET /api/district/{district_name}
```
**Example:**
```sh
GET /api/district/Dhaka
```
**Response:**
```json
[
    { "id": 1, "name": "Savar", "bengaliName": "সাভার" },
    { "id": 2, "name": "Dhamrai", "bengaliName": "ধামরাই" }
]
```

## License
This project is open-source and available under the MIT License.
