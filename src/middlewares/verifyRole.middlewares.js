
const verificarRol = (rolesPermitidos = []) =>{
    return (req, res, next)=>{
        const userRole = req.user?.rol;

        if(!rolesPermitidos.includes(userRole)){
            return res.status(403).json({message: 'Acceso denegado: rol no autorizado'});
        }
        next();
    };
};