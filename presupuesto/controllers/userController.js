const controller = {
    register: (req, res) => {
        return res.render('userRegisterForm')
    },
    processRegister: (req, res) => {
        return res.send('ok, viniste por post')
    },
    login: (req, res) => {
        return res.render('userLoginForm')
    },
    profile: (req, res) => {
        return res.render('userProfile')
    },
}

module.exports = controller;