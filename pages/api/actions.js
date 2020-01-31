import { Action } from "../../src/blog-actions";
import publicIP from 'public-ip'

import nodemailer from 'nodemailer'

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

        case "mail":
           
            
          

            try{
                     const {name,email,subject,content} = req.body;
                    let testAccount = await nodemailer.createTestAccount();

                
                    let transporter = nodemailer.createTransport({
                    host: "smtp.ethereal.email",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: testAccount.user, // generated ethereal user
                        pass: testAccount.pass // generated ethereal password
                    }
                    });
                    
                    let info = await transporter.sendMail({
                        from: `" ${name}  👻" ${email}`, // sender address
                        to: "bygrkm63@gmail.com", // list of receivers
                        subject: subject, // Subject line
                        text: content // plain text body
                    });


                    if(info.messageId){
                        res.status(200).json({
                            info,
                            message:'Başarılı şekilde ulaştırıldı.',
                            status:'OK'
                        })
                    }else{
                        res.json({
                            status:'NOK',message:'Bir sorun var'
                        })   
                    }

            
            }
           catch{
                res.json({status:'NOK',message:err})
            }
            finally{
                res.end()
            }
        
        break;

        default: 
            res.end();
        break;

    }

    res.end();
  }