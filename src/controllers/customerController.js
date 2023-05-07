const controller = {};

controller.list= (req,res)=>{
    req.getConnection((err,con)=>{
        if(err){
            throw err;
        }
        con.query('SELECT * FROM form', (err,customers)=>{
            if(err){
                throw err;
            }
            res.render('customers',{
                data : customers
            });
            
        })
    })
};

controller.save=(req, res)=>{
    const data = req.body;

    req.getConnection((err,con)=>{
        con.query('INSERT INTO form set ?', [data], (err, customer)=>{
            if(err){
                console.log(err)
            }
            res.redirect('/');
        });
    })
};

module.exports=controller; 
