const nameAndPassForm = document.querySelector("#InputSection form")

const getInfo =(e) =>{
  e.preventDefault();
  GetUserInfo(e.target.NameInput.value,e.target.PasswordInput.value);
  e.target.NameInput.value = "";
  e.target.PasswordInput.value = "";
}

nameAndPassForm.addEventListener("submit",getInfo);

async function GetUserInfo (name,pass){
  console.log(name,pass)
  try{
    const resp = await fetch("");
    if (resp.ok){
      const data = await resp.json();
    }
    else {
      throw "Error : http status code ="+resp.status;
    }
  }
  catch{((e) => console.log(e))}
}








