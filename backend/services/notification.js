const Notification = require('../models/notification');

class NotificationService {
  async getNotificationsByUser(userId) {
    try {
      const notifications = await Notification.find({ userId: userId });
      return notifications;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la récupération des notifications de l'utilisateur.");
    }
  }
}

module.exports = NotificationService;
