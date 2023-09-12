import clientPromise from "@/lib/mongodb";

export async function saveSubscription({data}) {
    try {
        const client = await clientPromise;
        const db =  client.db("contactData");
        
        const collection = await db.collection("subscription")
        
        let email = {
            email: data.get("email")
        }

        let result = await collection.insertOne(email)
        console.log("contcat m saved to db")
       
    } catch (e) {
        console.error(e)
    }
}