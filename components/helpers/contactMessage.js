import clientPromise from "@/lib/mongodb";

export async function saveMessageToDb({data}) {
    try {
        const client = await clientPromise;
        const db =  client.db("contactData");
        
        const collection = await db.collection("contactMessage")
        
        let message = {
            firstName: data.get("firstname"),
            lastName: data.get("lastname"),
            email: data.get("email"),
            message: data.get("message")
        }

        let result = await collection.insertOne(message)
        console.log("contcat m saved to db")
       
    } catch (e) {
        console.error(e)
    }
}