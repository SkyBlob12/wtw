const EstablishmentService = require('../services/etablissement');
const establishmentService = new EstablishmentService();

// Recherche d'établissements avec des critères spécifiques
exports.searchEstablishments = async (req, res) => {
  try {
    const establishments = await establishmentService.searchEstablishments(req.query);
    res.status(200).json(establishments);
  } catch (error) {
    console.error("Erreur lors de la recherche d'établissements :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la recherche d'établissements." });
  }
};
