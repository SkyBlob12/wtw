const {getUser, getUserByMail, getUserById, addUser} = require('../services/users')

exports.getUser = (req,res) =>{
    res.json({
        user : getUser()
    })
}

exports.getUserByMail = (req, res) =>{
    const user = getUserByMail(req.params.mail)
    if(!user){
        return res.status(404).send()
    }
    res.json({
        user: user
    })
}

exports.getUserById = (req, res) =>{
    const user = getUserById(req.params.id)
    if(!user){
        return res.status(404).send()
    }
    res.json({
        user: user
    })
}

exports.addUser = (req, res) =>{
    const newId = (req.body.prenom, req.body.nom, req.body.mail)
    if(!req.body.prenom || !req.body.nom || !req.body.mail){
        return res.status(404).send()
    }
    const newUser = getUserById(newId)
    res.json({
        message : "User ajouté",
        user : newUser
    })
    res.statut(201).send()
}

exports.createUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    const isNewUser = await User.isThisEmailInUse(email);
    if (!isNewUser)
      return res.json({
        success: false,
        message: 'This email is already in use, try sign-in',
      });
    const user = await User({
      fullname,
      email,
      password,
    });
    await user.save();
    res.json({ success: true, user });
  };