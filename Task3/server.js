const http = require("http");

const challenge = {
  title: "XOps Microchallenge #3 – CI/CD Pipeline in Action!"
};

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>XOps Microchallenge #3</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #000000; /* single dark blue */
      color: #fff;
      text-align: center;
      padding: 50px;
    }
    .card {
      background: rgba(255,255,255,0.1);
      border-radius: 15px;
      padding: 20px;
      max-width: 600px;
      margin: auto;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }
    h1 { font-size: 28px; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>${challenge.title}</h1>
  </div>
</body>
</html>
`;

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(html);
}).listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
