"use strict";

const users = {
    id: [ "flazma", "welsure" ] ,
    psword: [ "1234", "1234" ]
};


const output = {
    home: (req, res) => {   
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    }
};


const process = {
    login: (req,res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if ( users.id.includes(id)){
            const idx = users.id.indexOf(id);

            if (users.psword[idx] == psword) {
                return res.json({
                    success:true,
                });
            }
        }
        
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다."
        })

    }
}


module.exports = {
   output,
   process
}

