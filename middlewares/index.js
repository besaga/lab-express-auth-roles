module.exports = {
    isLoggedIn: (req, res, next) => {
        req.session.currentUser ? next() : res.render("auth/login-page", { errorMessage: "Has de estar logueado para ver este contenido" })
    },


    checkRoles: (...roles) => (req, res, next) => {
        roles.includes(req.session.currentUser.role) ? next() : res.status(401).render("auth/login-page", { errorMessage: "No tienes los permisos adecuados" })
    }}