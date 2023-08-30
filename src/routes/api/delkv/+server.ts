import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const POST: RequestHandler = async ({ request , platform }) => {

    const obj = await request.json()
    const res = await platform?.env.CFKV.delete(obj.keyName) 
    
    
    return json({ success: true },{
        status: 200,
        statusText: "successful"
    })

}
