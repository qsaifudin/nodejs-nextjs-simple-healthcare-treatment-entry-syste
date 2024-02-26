module.exports = {
  responseHelper: (req, res, next) => {
    const success = false;

    res.success = (message, data) => {
      let response = {
        success: true,
        message,
        data,
      };
      return res.json(response);
    };

    res.error400 = (message, description = {}) => {
      let response = {
        success,
        message,
        description,
      };
      return res.status(400).json(response);
    };

    res.error500 = (message, description = {}) => {
      let response = {
        success,
        message,
        description,
      };
      return res.status(500).json(response);
    };
    next();
  },
};
