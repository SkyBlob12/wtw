const EstablishmentService = require('../services/etablissement');
const establishmentService = new EstablishmentService();

// Récupérer la liste des établissements
exports.getEstablishments = async (req, res) => {
  try {
    const establishments = await establishmentService.getAllEstablishments();
    res.status(200).json(establishments);
  } catch (error) {
    console.error("Erreur lors de la récupération des établissements :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des établissements." });
  }
};

// Récupérer les détails d'un établissement spécifique
exports.getEstablishmentById = async (req, res) => {
  try {
    const establishment = await establishmentService.getEstablishmentById(req.params.id);
    if (!establishment) {
      return res.status(404).json({ message: "Établissement introuvable." });
    }
    res.status(200).json(establishment);
  } catch (error) {
    console.error("Erreur lors de la récupération des détails de l'établissement :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des détails de l'établissement." });
  }
};

// Ajouter un nouvel établissement
exports.addEstablishment = async (req, res) => {
  try {
    const newEstablishment = await establishmentService.addEstablishment(req.body);
    res.status(201).json(newEstablishment);
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'établissement :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'ajout de l'établissement." });
  }
};

// Mettre à jour un établissement spécifique
exports.updateEstablishment = async (req, res) => {
  try {
    await establishmentService.updateEstablishment(req.params.id, req.body);
    res.status(200).json({ message: "Établissement mis à jour avec succès." });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'établissement :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'établissement." });
  }
};

// Supprimer un établissement
exports.deleteEstablishment = async (req, res) => {
  try {
    await establishmentService.deleteEstablishment(req.params.id);
    res.status(200).json({ message: "Établissement supprimé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'établissement :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'établissement." });
  }
};
