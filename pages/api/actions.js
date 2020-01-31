import { Action } from "../../src/blog-actions";
import publicIP from 'public-ip'


const rGET = {
    error:"inaccessible with "
}


export default async (req, res) => {

    if(req.method !== "POST"){
        rGET.error += req.method;
        return res.json(rGET);
    }else if(!req.body.action){
        rGET.error = "Action method required";
        return res.json(rGET);
    }
   
    const {action} = req.body;
    

    switch(action){
        case "comment":
            const {comment,postId} = req.body;
            const userAgent = req.headers["user-agent"];

            if(!(comment || postId)){
                rGET.error = "message or postId required";
                res.json(rGET);
                return;
            }
            
            if(comment.length > 1000){
                rGET.error = " message length  < 1000 ";
                res.json(rGET);
                return;
            }
            const ip = await publicIP.v4();
            const data = await Action(postId,comment,ip,userAgent);
            res.json({
                ...data,
                status:'OK',
                message:'Yorumunuz gönderildi,yönetici tarafından onaylandıktan sonra görülebilir.'
            });
           
        break;

        default: 
            res.end();
        break;

    }

    res.end();
  }