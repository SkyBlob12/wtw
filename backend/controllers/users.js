//const userService = require('../services/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

// Inscription d'un nouvel utilisateur
exports.registerUser = async (req, res) => {
  try {
    // Vérification si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Cet utilisateur existe déjà." });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Création de l'utilisateur
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      avatar: req.body.avatar
    });

    // Sauvegarde de l'utilisateur dans la base de données
    await newUser.save();

    res.status(201).json({ message: "Utilisateur enregistré avec succès." });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'inscription." });
  }
};

// Connexion d'un utilisateur
exports.loginUser = async (req, res) => {
  try {
    // Recherche de l'utilisateur par email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "Adresse e-mail ou mot de passe incorrect." });
    }

    // Vérification du mot de passe
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Adresse e-mail ou mot de passe incorrect." });
    }

    // Création du jeton d'authentification
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token: token });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la connexion." });
  }
};

// Récupération du profil de l'utilisateur connecté
exports.getUserProfile = async (req, res) => {
  try {
    // Recherche de l'utilisateur par ID
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Erreur lors de la récupération du profil :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du profil." });
  }
};

// Mise à jour du profil de l'utilisateur connecté
exports.updateUserProfile = async (req, res) => {
  try {
    // Recherche de l'utilisateur par ID et mise à jour des informations
    await User.findByIdAndUpdate(req.userId, req.body);

    res.status(200).json({ message: "Profil mis à jour avec succès." });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du profil :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour du profil." });
  }
};
