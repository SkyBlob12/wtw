const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

class UserService {
  async registerUser(userData) {
    try {
      const existingUser = await User.findOne({ email: userData.email });
      if (existingUser) {
        throw new Error("Cet utilisateur existe déjà.");
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = new User({
        email: userData.email,
        username: userData.username,
        password: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        dateOfBirth: userData.dateOfBirth,
        avatar: userData.avatar
      });

      await newUser.save();
      return { message: "Utilisateur enregistré avec succès." };
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de l'inscription.");
    }
  }

  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Adresse e-mail ou mot de passe incorrect.");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error("Adresse e-mail ou mot de passe incorrect.");
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { token };
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la connexion.");
    }
  }

  async getUserProfile(userId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("Utilisateur introuvable.");
      }
      return user;
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la récupération du profil.");
    }
  }

  async updateUserProfile(userId, userData) {
    try {
      await User.findByIdAndUpdate(userId, userData);
      return { message: "Profil mis à jour avec succès." };
    } catch (error) {
      throw new Error("Une erreur s'est produite lors de la mise à jour du profil.");
    }
  }
}

module.exports = UserService;