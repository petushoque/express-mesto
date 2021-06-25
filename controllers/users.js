function getUsers(req, res) {
  console.log('GET USERS');
  res.send('<h1>Список пользователей</h1>')
}

module.exports = {
  getUsers,
}