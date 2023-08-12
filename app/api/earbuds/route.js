import clientPromise from "@/lib/mongodb";

export async function GET(req, res) {
    try {
        const client = await clientPromise;
        const db =  client.db("magmaData");
        
        const earbudData = await db
        .collection("earbudcases")
        .find({})
        .toArray();
   
       return new Response(JSON.stringify(earbudData));
    } catch (e) {
        console.error(e)
    }
};