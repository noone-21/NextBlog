import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.cmeuax1.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=Cluster0`

export const connectToDatabase = async () => {
    return await MongoClient.connect(connectionString)
  }

  export const insertToDatabase = async (client, document,database) => {

    const db = client.db()
    return await db.collection(database).insertOne(document)
  }


  // export const findFromDatabase = async (client, collection) => {

  //   const db = client.db()
  //   return await db.collection(collection).find().sort({_id: -1}).toArray()

  // }