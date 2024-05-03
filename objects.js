
const mysym= Symbol("key2")
const fb_log= {
     name:"zain",
    id:4444,
    city:"karachi",
    Activity:true,
    [mysym]:"mykey2",
    "email":"zainalvi552@gmail.com"
}
console.log(fb_log["email"])
console.log(fb_log.email)
console.log( typeof fb_log[mysym])
// Object.freeze(fb_log)
fb_log.id=454564;
console.log(fb_log)


fb_log.greetings=function(){
    console.log(`hello dear user ${fb_log.name}  how are you today`)
}
fb_log.greetings()

const admin={
    id:44,
    usernamesec:{
        firstname:"zain",
        middle:"ul abideen",
        lastname:"alvi",
        othername:{
             nicname:"zee",
        }
    }
}
console.log(admin.usernamesec.othername)
  
        const codebank_user={}
        codebank_user.id="08fh"
        codebank_user.name="elis morph"
        codebank_user.status="premium"
         console.log(codebank_user)
 
 
         const obj1={1:"a",2:"b",3:"c"}
         const obj2={4:"d",5:"e",6:"f"}
         const obj3=Object.assign({},obj1,obj2)//*optional{}
         const obj4={...obj1,...obj2}
         console.log(obj4)

//!  SUPPOSE GETING VALUES FROM DATABASE:
const users=[
    {
        name:"alvi",
        id:"g52d"

    }, 
    {
        Email:"zee245@gmail.com",
        status:"premium"
    }
]
console.log(users[1].Email)
console.log(Object.keys(codebank_user))
// * DE STRUCTURING OBJECTS

const course={
    coursename:"intro to api",
    instructor:"hitesh",
    price:"0.99$"
}
//course.instructor
const{coursename:courses}=course
console.log(coursename)
console.log(courses)

//! JSON:
// {
//     "Name":"djhfkjdfjk",
//     "semester":"fifth",
// }

// also data comes like:
// [
//     {},
//     {}
// ]