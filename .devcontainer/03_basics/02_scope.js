if (true )
    {
        let a=10
    const b=20
    var c=30
    }
    
    // console.log();// will not print as a is inside if
    // console.log();//will not print b as is inside the if 
    // console.log(c);//30 will print var variables can  be excess outside the if also  
    //++++++++++++++++++++++++NEsted Scope+++++++++++++++++++++++++++
    function one(){
        const username="AKSHAT"
        function two(){
            const website="youtube"
            console.log(username);//
            
        }
        //console.log(website);//ERROR
        two()
        
    }
    one()
    // ++++++++++++++++++++++ INTRESTING ++++++++++++++++++++++++++++
    console.log(addone(5))//6
    function addone(num){
        return num+1
    }
    console.log(addtwo(5))//ERROR cannot excess 
    const addtwo=function(num)
    {
        return num+2
    }
    