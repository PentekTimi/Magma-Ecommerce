import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req, res) {

    if (req.method === 'POST') {
        try {
        const body = await req.json()

        const params = {
            submit_type: "pay",
            mode: "payment",
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            shipping_options: [
                {shipping_rate: body.totalPrice > 40 ? process.env.FREE_SHIPPING : process.env.STANDARD_DELIVERY},
            ],
            allow_promotion_codes: true,
            line_items: body.cartItems.map((item) => {
                return {
                    price_data: {
                        currency: "gbp",
                        product_data:  {
                            name: item.productName,
                            images: [item.productImage]
                        },
                        unit_amount: item.productPrice * 100
                    },
                    adjustable_quantity: {
                        enabled: false,
                    },
                    quantity: item.productQuantity,
                }
            }),
            success_url: `${process.env.APIURL}/?success=true`,
            cancel_url: `${process.env.APIURL}/?canceled=true`
        }

        const session = await stripe.checkout.sessions.create(params);
        return NextResponse.json({result: session, success: true})
  
      } catch (err) {
        return NextResponse.json({ message: err, success: false })
      }
    } else {
        return NextResponse.json({success: false })
    }
  }