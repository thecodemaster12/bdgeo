# Bangladesh GeoAPI

Bangladesh GeoAPI is a free and open API providing geographical data of Bangladesh, including divisions, districts, and upazilas.

## Live Demo
[Click me](https://bdgeo.vercel.app/)

## Features
- Retrieve all divisions, districts, and upazilas.
- Get districts of a specific division.
- Get upazilas of a specific district.

## Technology
- Node Js
- Express Js

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/thecodemaster12/bd-geo-api.git
cd bd-geo-api
npm install
```

## Usage

Start the server:

```sh
npm run dev
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
