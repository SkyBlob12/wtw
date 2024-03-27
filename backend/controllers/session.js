const SessionService = require('../services/session');
const sessionService = new SessionService();

// Créer une nouvelle session pour un utilisateur dans un établissement
exports.createSession = async (req, res) => {
  try {
    const newSession = await sessionService.createSession(req.body);
    res.status(201).json(newSession);
  } catch (error) {
    console.error("Erreur lors de la création de la session :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la création de la session." });
  }
};

// Récupérer les sessions d'un utilisateur spécifique
exports.getSessionsByUser = async (req, res) => {
  try {
    const sessions = await sessionService.getSessionsByUser(req.params.userId);
    res.status(200).json(sessions);
  } catch (error) {
    console.error("Erreur lors de la récupération des sessions de l'utilisateur :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des sessions de l'utilisateur." });
  }
};

// Récupérer les sessions liées à un établissement spécifique
exports.getSessionsByEstablishment = async (req, res) => {
  try {
    const sessions = await sessionService.getSessionsByEstablishment(req.params.establishmentId);
    res.status(200).json(sessions);
  } catch (error) {
    console.error("Erreur lors de la récupération des sessions de l'établissement :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des sessions de l'établissement." });
  }
};

// Annuler une session spécifique
exports.cancelSession = async (req, res) => {
  try {
    await sessionService.cancelSession(req.params.id);
    res.status(200).json({ message: "Session annulée avec succès." });
  } catch (error) {
    console.error("Erreur lors de l'annulation de la session :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'annulation de la session." });
  }
};
