'use strict';

/**
 * cuenta controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cuenta.cuenta', ({ strapi }) =>  ({
    
    async customDeleteCuenta(ctx) {
     
        ctx.body = "ok";
    
    },



    
  }));

