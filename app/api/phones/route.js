import clientPromise from "@/lib/mongodb";

export async function GET(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("magmaData");
        
        const phoneData = await db
        .collection("phonecases")
        .find({})
        .toArray();
   
       return new Response(JSON.stringify(phoneData));
    } catch (e) {
        console.error(e)
    }
};