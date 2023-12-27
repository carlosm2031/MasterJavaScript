"use strict";

// Importar el modelo de Project
var Project = require("../models/project");
var fs = require("fs");
var path = require("path");


// Definir el controlador
var controller = {
  // Manejar la ruta '/home'
  home: function (req, res) {
    return res.status(200).send({
      message: "soy la home",
    });
  },

  // Manejar la ruta '/test'
  test: function (req, res) {
    return res.status(200).send({
      message: "soy el test",
    });
  },

  // Manejar la creación y almacenamiento de un nuevo proyecto
  saveProject: async function (req, res) {
    var project = new Project();

    // Obtener los parámetros del cuerpo de la solicitud
    var params = req.body;

    // Asignar valores al objeto del proyecto
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    try {
      // Guardar el proyecto en la base de datos
      const projectStored = await project.save();
      
      // Responder con el proyecto almacenado
      return res.status(200).send({
        project: projectStored,
      });
    } catch (error) {
      // Manejar errores durante el proceso de guardado
      return res.status(500).send({
        message: "Error al guardar el proyecto",
      });
    }
  },

  // Obtener un proyecto por su ID
  getProject: function (req, res) {
    var projectId = req.params.id;

    if (projectId == null) {
      return res.status(404).send({
        message: "Debes enviar el ID del proyecto",
      });
    }

    // Buscar un proyecto por su ID
    Project.findById(projectId)
      .then((project) => {
        // Manejar el resultado de la búsqueda
        if (!project) {
          return res.status(404).send({
            message: "No existe el proyecto",
          });
        }
        return res.status(200).send(project);
      })
      .catch((err) => {
        // Manejar errores durante la búsqueda
        return res.status(500).send({
          message: "Error al devolver el proyecto",
        });
      });
  },

  // Obtener todos los proyectos
  getProjects: function (req, res) {
    // Buscar todos los proyectos y ordenarlos por año ascendente
    Project.find({})
      .sort({ year: 1 })
      .then((projects) => {
        // Manejar el resultado de la búsqueda
        if (!projects) {
          return res.status(404).send({
            message: "No hay proyectos",
          });
        }
        return res.status(200).send({ projects });
      })
      .catch((err) => {
        // Manejar errores durante la búsqueda
        return res.status(500).send({
          message: "Error al devolver los proyectos",
        });
      });
  },

  // Actualizar un proyecto por su ID
  updateProject: function (req, res) {
    var projectId = req.params.id;
    var update = req.body;

    // Buscar y actualizar un proyecto por su ID
    Project.findByIdAndUpdate(projectId, update)
      .then((projectUpdated) => {
        // Manejar el resultado de la actualización
        if (!projectUpdated) {
          return res.status(404).send({
            message: "No existe el proyecto",
          });
        }
        return res.status(200).send({
          project: projectUpdated,
        });
      })
      .catch((err) => {
        // Manejar errores durante la actualización
        return res.status(500).send({
          message: "Error al actualizar el proyecto",
        });
      });
  },

  // Eliminar un proyecto por su ID
  deleteProject: function (req, res) {
    var projectId = req.params.id;

    // Buscar y eliminar un proyecto por su ID
    Project.findByIdAndDelete(projectId)
      .then((projectDeleted) => {
        // Manejar el resultado de la eliminación
        if (!projectDeleted) {
          return res.status(404).send({
            message: "No existe el proyecto",
          });
        }
        return res.status(200).send({
          message: "Proyecto eliminado correctamente",
        });
      })
      .catch((err) => {
        // Manejar errores durante la eliminación
        return res.status(500).send({
          message: "Error al eliminar el proyecto",
        });
      });
  },

  // Subir una imagen para un proyecto por su ID
  uploadImage: function (req, res) {
    var projectId = req.params.id;
    var fileName = "Imagen no subida";

    // Verificar si hay archivos en la solicitud
    if (req.files) {
      var filePath = req.files.image.path;
      var fileSplit = filePath.split("\\");
      var fileName = fileSplit[1];

      // Actualizar la propiedad de imagen del proyecto con el nombre del archivo
      Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true })
        .then((projectUpdated) => {
          // Manejar el resultado de la actualización
          if (!projectUpdated) {
            return res.status(404).send({ message: "El proyecto no existe" });
          }

          return res.status(200).send({
            project: projectUpdated,
          });
        })
        .catch((err) => {
          // Manejar errores durante la actualización
          return res.status(500).send({ message: "La imagen no se ha subido" });
        });
    } else {
      // Responder con un mensaje si no hay archivos en la solicitud
      return res.status(200).send({
        message: fileName,
      });
    }
  },

  getImageFile(req, res) {
    var file = req.params.image;
    var pathFile = "./uploads/" + file;

    fs.exists(pathFile, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(pathFile));
      } else {
        return res.status(200).send({
          message: "No existe la imagen",
        });
      }
    })

    // res.sendFile(path.resolve(path));

  },
};

// Exportar el controlador para su uso en otras partes de la aplicación
module.exports = controller;
