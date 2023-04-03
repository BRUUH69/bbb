Ulozit.onclick = function() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    
    
    document.getElementById("demo").innerHTML = "Tvoje jméno je " + name.;

    class Person {
        name;
        birthdate;
        
        constructor(name, birthdate) {
            this.name = fname.value + " " + lname.value;
            this.birthdate = birthdate;
        }
        
        getBirthday() {
          let birthday=this.birthdate.getDate() + "." + this.birthdate.getMonth() + "." + this.birthdate.getFullYear();
          return(birthday);
        }
        
        getAge() {
            let today = new Date();
            let age = today.getFullYear() - this.birthdate.getFullYear();
            
            if(today.getMonth() < (this.birthdate.getMonth()-1) ) 
               age--;
            
            if(today.getMonth() == (this.birthdate.getMonth()-1) ) 
               if(today.getDate() < this.birthdate.getDate()) 
                 age--;
            
            return(age);     
        }
    
        isAdult() {
            if(this.getAge() < 18)
               return(false);
             else
               return(true);
        }
        
    }     
   
//document.getElementById("welcome").innerText="No nazdar";             
   };
