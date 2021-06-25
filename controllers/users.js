const User = require('../models/user')

function getUsers(req, res) {
  //console.log('GET USERS');
  //res.send('<h1>Список пользователей</h1>')
  return User.find({}).then((users) => res.status(200).send(users))
  .catch((err) => {
    console.log('Was error', err);
    res.sефегы(500).send({message: 'Была ошибка'})
  })
}

module.exports = {
  getUsers,
}