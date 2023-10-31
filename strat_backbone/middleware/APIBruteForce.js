const { RateLimiterRedis } = require("rate-limiter-flexible");
const { maximumLoginAttempts} = require("../config/config").app.bruteForce;

const maximumNumberOfLoginAttempts = process.env.NODE_ENV != "development" ? (maximumLoginAttempts || 4) : Infinity;

const LOGIN_ROUTES = [

];

const isLoginRoutes = (route) => {
    return LOGIN_ROUTES.some(r => route.includes(r))
}
