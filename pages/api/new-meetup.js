import { MongoClient } from "mongodb";
// /api/new-meetup
//
async function handler(req, res) {
  if (req.method == "POST") {
    const { body: data } = req;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:qazWsxedCrfV1!@cluster0.i2nzk.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
