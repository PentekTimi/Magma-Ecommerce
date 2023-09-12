"use server"
import { saveSubscription } from "@/components/helpers/subscribe";

const createSubscription = async (data) => {
    await saveSubscription({data})
}

export default createSubscription