module.exports = {
    routes: [
      {
        method: "POST",
        path: "/customDeleteCuenta",
        handler: "cuenta.customDeleteCuenta",
        config: {
            find: {
              auth: false
            }
          }
      },
    ],
  };