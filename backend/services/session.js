const Session = require('../models/session');

class SessionService {
  async createSession(sessionData) {
    try {
      const newSession = new Session(sessionData);
      await newSession.save();
      return newSession;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la création de la session.");
    }
  }

  async getSessionsByUser(userId) {
    try {
      const sessions = await Session.find({ userId: userId });
      return sessions;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la récupération des sessions de l'utilisateur.");
    }
  }

  async getSessionsByEstablishment(establishmentId) {
    try {
      const sessions = await Session.find({ establishmentId: establishmentId });
      return sessions;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la récupération des sessions de l'établissement.");
    }
  }

  async cancelSession(sessionId) {
    try {
      await Session.findByIdAndDelete(sessionId);
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de l'annulation de la session.");
    }
  }
}

module.exports = SessionService;
