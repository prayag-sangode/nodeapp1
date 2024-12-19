# NodeApp API

This is a Node.js application that provides a basic API with a status endpoint and item management functionality. The API is accessible at the path `/llmhub/nodeapp-api/v1` to align with the API Gateway configuration.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

## Setup Instructions

1. **Clone the Repository**  
   Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**  
   Install the required Node.js packages:
   ```bash
   npm install
   ```

3. **Run the Application**  
   Start the server:
   ```bash
   node app.js
   ```

   The application will run at:
   ```
   http://localhost:8080/llmhub/nodeapp-api/v1
   ```

## Endpoints

### 1. **Status Endpoint**

- **URL**: `/llmhub/nodeapp-api/v1`
- **Method**: `GET`
- **Description**: Returns the status and version of the API.
- **Example**:
  ```bash
  curl http://localhost:8080/llmhub/nodeapp-api/v1
  ```
  **Response**:
  ```json
  {
    "status": "API is working",
    "version": "v1"
  }
  ```

### 2. **Items Endpoint**

- **URL**: `/llmhub/nodeapp-api/v1/items`
- **Method**: `GET`
- **Description**: Returns a list of items with their IDs and names.
- **Example**:
  ```bash
  curl http://localhost:8080/llmhub/nodeapp-api/v1/items
  ```
  **Response**:
  ```json
  [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"}
  ]
  ```

### 3. **Undefined Routes**

- **Description**: Any request to undefined routes will return a 404 error.
- **Example**:
  ```bash
  curl http://localhost:8080/undefined-route
  ```
  **Response**:
  ```json
  {
    "error": "Not Found",
    "message": "The requested resource does not exist"
  }
  ```

## Testing the Application

1. **Using cURL**  
   Test the endpoints using `curl`:
   ```bash
   curl http://localhost:8080/llmhub/nodeapp-api/v1
   curl http://localhost:8080/llmhub/nodeapp-api/v1/items
   ```

2. **Using Browser**  
   Open your browser and navigate to:
   - [http://localhost:8080/llmhub/nodeapp-api/v1](http://localhost:8080/llmhub/nodeapp-api/v1)
   - [http://localhost:8080/llmhub/nodeapp-api/v1/items](http://localhost:8080/llmhub/nodeapp-api/v1/items)

3. **Postman**  
   Import the endpoints into Postman and test the APIs.

## Deployment

For production environments:
1. Use a process manager like **PM2** to keep the application running.
   ```bash
   npm install -g pm2
   pm2 start app.js
   ```
2. Set the `PORT` as an environment variable if needed:
   ```bash
   PORT=8080 pm2 start app.js
   ```
