export const validationFromReg=(regDetails)=>{
    let uName=document.getElementById("userNameError");
    let age=document.getElementById("ageError");
    let phone=document.getElementById("phoneError");
    let mail=document.getElementById("mailError");

    let uNameTF=false;
    let ageTF=false;
    let phoneTF=false;
    let mailTF=false;

    regDetails.name.trim()===""?uName.innerHTML="username cannot be empty":uName.innerHTML="";
    regDetails.age.trim()===""?age.innerHTML="age cannot be empty":age.innerHTML="";
    regDetails.phone.trim()===""?phone.innerHTML="phone number cannot be empty":phone.innerHTML=""
    regDetails.email.trim()===""?mail.innerHTML="email cannot be empty":mail.innerHTML=""

    regDetails.name.trim()===""?uNameTF=false:uNameTF=true;
    console.log(regDetails.name.trim(),uNameTF)
    regDetails.age.trim()===""?ageTF=false:ageTF=true;
    console.log(ageTF,regDetails.age)
    regDetails.phone.trim()===""?phoneTF=false:phoneTF=true;
    console.log(phoneTF,regDetails.phone)
    regDetails.email.trim()===""?mailTF=false:mailTF=true;
    console.log(mailTF,regDetails.email)

    if(uNameTF && ageTF && phoneTF && mailTF) return true;
    else return false;
}