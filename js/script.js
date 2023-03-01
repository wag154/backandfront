const nameAndPassForm = document.querySelector("#InputSection form")

const getInfo =(e) =>{
  e.preventDefault();
  GetUserInfo(e.target.NameInput.value,e.target.PasswordInput.value,e.target.CommentInput.value);
  e.target.NameInput.value = "";
  e.target.PasswordInput.value = "";
  e.target.CommentInput.value = "";
}

nameAndPassForm.addEventListener("submit",getInfo);

async function GetUserInfo (name,pass,Comment){
  console.log(name,pass,Comment)
  try{
    const resp = await fetch(`http://127.0.0.1:3001/:${name}&${pass}&${Comment}`);
    if (resp.ok){
      const data = await resp.json();
      addInfo(data)
    }
    else {
      throw "Error : http status code ="+resp.status;
    }
  }
  catch{((e) => console.log(e))}
}

const commentDisplay = document.querySelector("#comments");

const addInfo =  (UserInfo) =>{
  if (UserInfo != ""){

    const CommentBoxUser = document.createElement("h1");
    const CommentBoxContent = document.createElement("p1");
    
    CommentBoxUser.textContent = UserInfo.Name;
    CommentBoxContent.textContent = UserInfo.comment;

    commentDisplay.appendChild(CommentBoxUser);
    commentDisplay,appendChild(CommentBoxContent);
    


  }
}







