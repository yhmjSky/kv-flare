import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const POST: RequestHandler = async ({ request , platform }) => {

    const obj = await request.json()
    const res = await platform?.env.CFKV.get(obj.keyName) 
    console.log(res);
    
    
    return json({ result: res, success: true },{
        status: 200,
        statusText: "find done!"
    })

}
