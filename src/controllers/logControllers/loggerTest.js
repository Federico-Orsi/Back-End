


export function loggerTest (req, res, next) {

req.logger.http("probando el fucking logger");
req['logger'].debug("testing Winston");
req.logger.silly("testing silly comment");
console.log("siomo noi")
req.logger.warn("NOT_FOUND")
req.logger.error("Just Testing")
req.logger.info("testeando Info")
req.logger.debug("testeando debug")
req.logger.warn("WARNING!!")
req.logger.verbose("Probando Verbose")


res.json("Mostrando Loggs")


}