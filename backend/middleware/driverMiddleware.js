const driverMiddleware = (req, res, next) => {
    if (req.user.role !== 'driver') {
        return res.status(403).json({ msg: 'Driver resource. Access denied' });
    }
    next();
};

module.exports = driverMiddleware;
