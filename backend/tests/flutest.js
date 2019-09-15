const basic = (req, res) => {
  const { fever, temp, cough } = req.body;
  if (!fever || !temp || !cough) {
      res.status(400).send({ response: 'Form not complete' });
  } else {
      if (fever == "true" && temp > 38 && cough == "true" ) {
          res.status(200).send({ response: 'You have the flu' });
        } else if ( temp < 36 || temp > 37.2 ) {
          console.log("Abnormal:" + req.body.fever + req.body.temp + req.body.cough);
        } else {
          res.status(200).send({ response: 'You are healthy' });
        }
      }
    }

module.exports = { basic };
