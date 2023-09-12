"use server"
import { saveMessageToDb } from "@/components/helpers/contactMessage";

const createContactMessage = async (data) => {
    await saveMessageToDb({data})
}

export default createContactMessage