// 'use strict'

// var express = require('express');
// var ProjectController = require('../controlers/project');

// var router = express.Router();

// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart({ uploadDir: './uploads' });

// router.get('/home', ProjectController.home);
// router.post('/test', ProjectController.test);
// router.post('/save-project', ProjectController.saveProject);
// router.get('/get-project/:id?', ProjectController.getProject);
// router.get('/projects', ProjectController.getProjects);
// router.put('/update-project/:id', ProjectController.updateProject);
// router.delete('/delete-project/:id', ProjectController.deleteProject);
// router.post('/upload-image/:id',multipartMiddleware ,ProjectController.uploadImage);

// module.exports = router;

// /////

'use strict';

var express = require('express');
var cors = require('cors');
var ProjectController = require('../controlers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });

// Habilitar CORS para todas las rutas
router.use(cors());

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/get-project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/update-project/:id', ProjectController.updateProject);
router.delete('/delete-project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;