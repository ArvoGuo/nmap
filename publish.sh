#!/bin/bash
echo "enter your commit message(defalut is vertion)：";
read message;
npm version patch -m "${message}";

