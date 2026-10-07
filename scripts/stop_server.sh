#!/bin/bash

echo "Stopping existing Node.js application..."

pkill -f "node server.js" || true

echo "Application stopped."