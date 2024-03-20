import { connectToDatabase, insertToDatabase } from "../../lib/db-util";

export default async function Handler(req, res){
    if(req.method === 'POST'){
        const email = req.body.email
        const name = req.body.name
        const message = req.body.message

        if (
            !email ||
            email.trim() === '' ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
          ) {
            res.status(422).json({message: 'Invalid Input!'})
            return;
          }

          const newMessage = {
            email: email,
            name : name,
            message : message
          }

          let client

          try {
      
            client = await connectToDatabase()
            
          } catch (error) {
            res.status(500).json({message: 'Connection to Db Failed!'})
            return
          }
          
          try {
            
            const result = await insertToDatabase(client, { message: newMessage }, 'messages' )
            newMessage.id = result.insertedId
            client.close()
            
          } catch (error) {
            
            res.status(500).json({message: 'Failed to Insert data to Db!'})
            return
      
          }

          res.status(201).json({message: 'Message sent Successfully!', message: newMessage})
    }
}