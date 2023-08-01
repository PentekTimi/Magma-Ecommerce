import clientPromise from "@/lib/mongodb";

export async function GET(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("magmaData");
        
        const watchData = await db
        .collection("watchbands")
        .find({})
        .toArray();
   
       return new Response(JSON.stringify(watchData));
    } catch (e) {
        console.error(e)
    }
};