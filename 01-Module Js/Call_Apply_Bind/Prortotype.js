const superHero=["superMan","BatMan"];

let power={
    thor:"hammer",
    spiderman:"sling",
    getSpider:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Shubham=()=>{
    console.log(`Shubham is great !`)
}

power.Shubham();

superHero.Shubham();

//           --------->>>> Inhertance <<<<-----------

const user={
    name:'UserName',
}

const Teacher={
    makeVideo:true,
}

const teachingAssistant={
    isAvailable:true,
}

//inheitating using proto keyword object of teachingAssistant.

const TAsupport={
    makeAssigment:'JS assignment',
    fullTime:true,
    __proto__:teachingAssistant
}

//giving access all properties  of user !
Teacher.__proto__=user;

//New Sytex
Object.setPrototypeOf(Teacher,user);