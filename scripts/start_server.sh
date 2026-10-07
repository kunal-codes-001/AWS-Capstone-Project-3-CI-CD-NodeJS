#!/bin/bash

echo "Starting Node.js application..."

cd /home/ec2-user/app

nohup npm start > /home/ec2-user/app/app.log 2>&1 &

echo "Node.js application started."