const nodemailer = require('nodemailer');

//create/set a transporter 
const myTransporter = nodemailer.createTransport( {
    host : 'smtp.gmail.com', 
    secure : true, //means use SSL 
    auth : {
        user : 'khotdt77@gmail.com',     //use your gmail from which you want to send emails
        pass : '*******'               //password for above email
    }
}); 


console.log('a log!'); //this is some log for testing! 


//infoObj structure -> 
 /* 
    {
        from : 'anEmail',  //given in myTransporter configuration 
        to : [email list],  //an list of recipients eg, [me123@example.com, me234@example.com] 
        subject : 'your subject',  
        text : 'your message' 
        html : <h1>  some heading or something here</h1>   //you can also send  HTML content like forms, an landing page etc. 
    }
 */
    
    const infoObj = {
        from : 'khotdt77@gmail.com', 
        to : ['khotd.ug19.cs@nitp.ac.in', 'khotdt@gmail.com'],   //recipients 
        subject : 'a test message',     //mail subjects 
        text : 'welcome in node.js!',    //body text
        html : '<h1> This is some text in html!</h1>'
    }             

//now we can send email using above infoObj 
myTransporter.sendMail(infoObj, (err,info) => {
    if(err) {
      return  console.log('an error occured! ', err);
    } 
    console.log('email sent to ' + infoObj.to + '. timestamp :' + Date.now()); 
    console.log(info.response);  
})



  // there are many other things you can do with it like sending attachments etc. 
  //for more informations visit :-  https://nodemailer.com/about/        


