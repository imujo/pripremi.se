// const express = require('express');
import express from 'express'
import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
// const path = require('path');
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);