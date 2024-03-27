const NotificationService = require('../services/notification');
const notificationService = new NotificationService();

// Récupérer les notifications pour un utilisateur spécifique
exports.getNotificationsByUser = async (req, res) => {
  try {
    const notifications = await notificationService.getNotificationsByUser(req.params.userId);
    res.status(200).json(notifications);
  } catch (error) {
    console.error("Erreur lors de la récupération des notifications de l'utilisateur :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des notifications de l'utilisateur." });
  }
};
