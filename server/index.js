const express = require("express");
const app = express();
const port = 3000;
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const url = "mongodb://127.0.0.1:27017";

app.use(cors());
app.use(express.json());

const getConnection = url => callback => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err);
    callback(client.db("budget"));
    client.close();
  });
};

const connect = getConnection(url);

app.get("/transfers", (req, res) => {
  connect(db => {
    db.collection("transfers")
      .find()
      .toArray()
      .then(data => {
        res.send(data);
      });
  });
});

app.post("/transfers/create", (req, res) => {
  connect(db => {
    db.collection("transfers")
      .insertMany(req.body)
      .then(result => {
        res.send(result);
      });
  });
});

app.post("/transfers/update", (req, res) => {
  // TODO: transaction needed
  const transfers = req.body;
  connect(db => {
    transfers.forEach((transfer, index) => {
      const { _id, ...restTransfer } = transfer;
      db.collection("transfers")
        .replaceOne({ id: transfer.id }, restTransfer)
        .then(data => {
          if (index === transfers.length - 1) {
            res.end();
          }
        });
    });
  });
});

app.post("/transfers/remove", (req, res) => {
  const ids = req.body;
  connect(db => {
    db.collection("transfers")
      .deleteMany({ id: { $in: ids } })
      .then(result => {
        res.send(result);
      });
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
