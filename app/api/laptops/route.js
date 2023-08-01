import clientPromise from "@/lib/mongodb";

export async function GET(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("magmaData");
        
        const laptopData = await db
        .collection("laptopcases")
        .find({})
        .toArray();
   
       return new Response(JSON.stringify(laptopData));
    } catch (e) {
        console.error(e)
    }
};