const express = require('express');
const router = express.Router();

/* GET admin page. */
router.get('/', function(request, response, next) {

    var customColor1 = request.cookies["custom-color1"];
    customColor1 = customColor1 === undefined ? 'teal' : customColor1;

    response.render('static/admin', {
        user: request.user === undefined ? null : request.user,
        loggedIn: request.user != undefined,
        customColor1: customColor1
    });

});

module.exports = router;
