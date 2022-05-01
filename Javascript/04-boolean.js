// ****Boolean veri türüyle çalışmak *****


// 0 ve 1 i anlamak
 let isactive = false //0
 isactive = true  //1
 console.log(isactive)

 let username;
 let isusername = Boolean(username)
 console.log(isusername)

 Boolean("11")//true
 Boolean("0")//true
 Boolean("")//false

 username = "user"
 console.log("User Name", Boolean(username))

 // 0 , -0 , null , false , NaN , undefined , ("")

Boolean(0)
//false
Boolean(-0)
//false
Boolean(null)
//false
Boolean(-0.1)
//true