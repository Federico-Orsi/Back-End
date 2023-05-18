export const currentSession = async (req, res, next) => {

    res.json(req.user)
}