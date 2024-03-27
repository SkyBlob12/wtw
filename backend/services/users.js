const users = [
    {id : 1, prenom : "Pierre", nom :"Dupont", mail:"pierre.test@gmail.com"},
    {id : 2, prenom : "Paul", nom :"Dupuis", mail:"paul.test@gmail.com"}
]

//Retourne la liste de tous les utilisateurs
exports.getUser = () =>{
    return users
}

//Retourne un utilisateur grâce à son mail qui est unique
exports.getUserByMail = (mail) =>{
    return users.find(user => user.mail == mail)
}

//Retourne un utilisateur grâce à son id
exports.getUserById = (id) =>{
    return users.find(user => user.id == id)
}

//Ajout d'un utilisateur
exports.addUser = (prenom, nom, mail) =>{
    const newId = users.length + 1
    users.push({
        id : newId,
        prenom,
        nom,
        mail
    })
    return newId
}