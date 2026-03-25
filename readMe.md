
# myTube

## Description
A simple and efficient video management application.

## Features
- Upload and organize videos
- Create playlists
- Search functionality
- User-friendly interface

## Installation
```bash
git clone https://github.com/yourusername/myTube.git
cd myTube
npm install
```

## Usage
```bash
npm start
```

## Requirements
- Node.js 14+
- npm or yarn

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## License
MIT


## API Endpoints

### Upload Video
**POST** `/api/videos/upload`

**Request:**
```json
{
  "title": "string",
  "description": "string",
  "file": "binary"
}
``` 
**Response:**
```json
{
  "id": "string",
  "title": "string",
  "url": "string",
  "createdAt": "ISO 8601 timestamp"
}
```

### Get Videos
**GET** `/api/videos`

**Response:**
```json
{
  "videos": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "url": "string"
    }
  ]
}
```

### Create Playlist
**POST** `/api/playlists`

**Request:**
```json
{
  "name": "string",
  "videoIds": ["string"]
}
```

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "videoIds": ["string"],
  "createdAt": "ISO 8601 timestamp"
}
```

### Search Videos
**GET** `/api/videos/search?q=query`

**Response:**
```json
{
  "results": [
    {
      "id": "string",
      "title": "string",
      "description": "string"
    }
  ]
}
```
