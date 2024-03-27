const Establishment = require('../models/etablissement');

class EstablishmentService {
  async getAllEstablishments() {
    try {
      const establishments = await Establishment.find();
      return establishments;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la récupération des établissements.");
    }
  }

  async getEstablishmentById(id) {
    try {
      const establishment = await Establishment.findById(id);
      return establishment;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la récupération des détails de l'établissement.");
    }
  }

  async addEstablishment(data) {
    try {
      const newEstablishment = new Establishment(data);
      await newEstablishment.save();
      return newEstablishment;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de l'ajout de l'établissement.");
    }
  }

  async updateEstablishment(id, data) {
    try {
      await Establishment.findByIdAndUpdate(id, data);
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la mise à jour de l'établissement.");
    }
  }

  async deleteEstablishment(id) {
    try {
      await Establishment.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la suppression de l'établissement.");
    }
  }
}

module.exports = EstablishmentService;
