const express = require('express');
const router = express.Router();

// Import des contrôleurs
const userController = require('./controllers/users');
const establishmentController = require('./controllers/etablissement');
const sessionController = require('./controllers/session');
const notificationController = require('./controllers/notification');
const searchController = require('./controllers/recherche');

// Routes pour les utilisateurs
router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser);
router.get('/users/profile', userController.getUserProfile);
router.put('/users/profile', userController.updateUserProfile);

// Routes pour les établissements
router.get('/etablissement', establishmentController.getEstablishments);
router.get('/etablissement/:id', establishmentController.getEstablishmentById);
router.post('/etablissement', establishmentController.addEstablishment);
router.put('/etablissement/:id', establishmentController.updateEstablishment);
router.delete('/etablissement/:id', establishmentController.deleteEstablishment);

// Routes pour les sessions
router.post('/sessions', sessionController.createSession);
router.get('/sessions/user/:userId', sessionController.getSessionsByUser);
router.get('/sessions/establishment/:establishmentId', sessionController.getSessionsByEstablishment);
router.delete('/sessions/:id', sessionController.cancelSession);

// Route pour les notifications
router.get('/notifications/user/:userId', notificationController.getNotificationsByUser);

// Route pour la recherche
router.get('/recherche', searchController.searchEstablishments);

module.exports = router;