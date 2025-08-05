# xops Hello Web Project

This project hosts a simple HTML page using Nginx in a Docker container.

<img width="1309" height="677" alt="image" src="https://github.com/user-attachments/assets/1159f15e-0b6d-4ac1-a54e-56cd4bae5ffc" />


## Features

- Displays "Hello from xops" with custom CSS styling.
- Runs on Nginx using Docker.

## Getting Started

### Build the Docker Image

```sh
docker build -t xops-hello .
```

### Run the Docker Container

```sh
docker run -d -p 8080:80 --name xops-hello-container xops-hello
```

Visit [http://localhost:8080](http://localhost:8080) in your browser to view the page.

## Files

- `index.html` – The HTML page.
- `Dockerfile` – Docker configuration.
- `README.md` – Project documentation.
