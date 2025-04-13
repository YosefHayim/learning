// Socket.io server that will service both
// and react clients
// Req:
// - socket.io
// - socket.io/cluster-adapter
// - @socket.io/sticky

// Entrypoint for our cluster which will make workers
// And the workers will do the socket.io handling
// See https://github.com/elad/node-cluster-socket.io