const Establishment = require('../models/etablissement');

class EstablishmentService {
  async searchEstablishments(queryParams) {
    try {
      const { name, address, criteria } = queryParams;
      const filter = {};

      if (name) {
        filter.name = { $regex: name, $options: 'i' }; // Recherche insensible à la casse
      }
      if (address) {
        filter.address = { $regex: address, $options: 'i' }; // Recherche insensible à la casse
      }
      if (criteria) {
        filter.criteria = { $in: criteria }; // Recherche avec les critères fournis
      }

      const establishments = await Establishment.find(filter);
      return establishments;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la recherche d'établissements.");
    }
  }
}

module.exports = EstablishmentService;
