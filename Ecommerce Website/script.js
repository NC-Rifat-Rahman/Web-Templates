function validateform()
{
    var n=document.getElementById("name").value.trim();
    var u=document.getElementById("username").value.trim();
    var str=u.toString();
    var c=document.getElementById("Contact").value.trim();
    var e=document.getElementById("email").value.trim();
    
    if(n=="")
    {
        alert("Name cannot be empty");
        return false;
    }

    if(u=="")
    {
        alert("Username cannot be empty and cannot contain whitespace");
        return false;
    }
    if(/\s/.test(str))
    {
        alert("Username cannot be empty and cannot contain whitespace");
        return false;
    }
    
    if(!e.match(/@/gi))
    {
        alert("Enter Valid Email");
        return false;
    } 
   if(isNaN(c))
   {
       alert("Not a number");
   }

  }

 
  

 