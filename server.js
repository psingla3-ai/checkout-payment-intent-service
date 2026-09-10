import http from 'node:http';

const port = process.env.PORT || 3000;
http.createServer((_request, response) => {
  response.writeHead(200, {'content-type': 'application/json'});
  response.end(JSON.stringify({status: 'UP', service: 'checkout-payment-intent-service'}));
}).listen(port);
