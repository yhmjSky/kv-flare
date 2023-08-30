import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const POST: RequestHandler = async ({ request , platform }) => {

    const obj = await request.json()
    const keyName = obj.keyName;
    const value = obj.value;
    const res = await platform?.env.CFKV.put(keyName, value) 
    
    
    return json({ success: true },{
        status: 200,
        statusText: "successful"
    })

}
