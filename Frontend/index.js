const BASE_URL = "http://localhost:8000"
let mode ='CREATE' //default
let selectedId = ''
window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    if(id){
        mode = 'EDIT'
        selectedId = id
        //ดึงข้อมูล user เก่าออกมาก่อน
        try{
            const response = await axios.get(`${BASE_URL}/users/${id}`)
            const user = response.data
            //แล้วนำข้อมูล user กลับใส่เข้าไปใน input
            let firstnameDOM = document.querySelector('input[name=firstname]')
            let lastnameDOM = document.querySelector('input[name=lastname]')
            let ageDOM = document.querySelector('input[name=age]')
            let descriptionDOM = document.querySelector('textarea[name=description]')

            firstnameDOM.value=user.firstname
            lastnameDOM.value=user.lastname
            ageDOM.value=user.age
            descriptionDOM.value=user.description

            let genderDOM = document.querySelectorAll('input[name=gender]')
            for(let i = 0; i < genderDOM.length ; i++){
                if(genderDOM[i].value==user.gender){
                    genderDOM[i].checked = true
                }
            }

            let interestDOM = document.querySelectorAll('input[name=interests]')
            for(let i = 0; i < interestDOM.length ; i++){
                if(user.interests.includes(interestDOM[i].value)){
                    interestDOM[i].checked = true
                }
            }
    }catch(error){
            console.log('error',error)

        }
    }
}

const validateData = (userData) => {
    let errors = []
    if(!userData.firstname){
        errors.push('กรอกชื่อดิ๊มึงลืมอะ')
    }
    if(!userData.lastname){
        errors.push('กรอกนามสกุลดิ๊มึงลืมอะ')
    }
    if(!userData.age){
        errors.push('กรอกอายุดิ๊มึงลืมอะ')
    }
    if(!userData.gender){
        errors.push('เลือกเพศดิ๊มึงลืมอะ')
    }
    if(!userData.interests){
        errors.push('เลือกสิ่งที่สนใจหน่อยดิ๊ หรือไม่มี?')
    }
    if(!userData.description){
        errors.push('เพิ่มคำอธิบายบ้างก็ได้นะ')
    }
    return errors
}

const submitData = async  () => {

    let firstnameDOM = document.querySelector('input[name=firstname]')
    let lastnameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')

    let genderDOM = document.querySelector('input[name=gender]:checked')||{}
    let interestDOM = document.querySelectorAll('input[name=interests]:checked')||{}
    let descriptionDOM = document.querySelector('textarea[name=description]')

    let messageDOM = document.getElementById('message')

try{
    let interest = ""
    for (let i = 0; i < interestDOM.length; i++) {
        interest += interestDOM[i].value
        if (i !== interestDOM.length - 1) {
            interest += ", "
        }
    }
    /*console.log('test')*/
    let userData = {
        firstname : firstnameDOM.value,
        lastname : lastnameDOM.value,
        age : ageDOM.value,
        gender : genderDOM.value,
        description : descriptionDOM.value,
        interests : interest
    }
    console.log("submit Data", userData)

    const errors = validateData(userData)
    if(errors.length > 0){
        //1.มี error เกิดขึ้นจะโยนไปหา error
        throw{
            message:'กรอกข้อมูลไม่ครบ',
            errors:errors
        }
    }
    let message= 'บันทึกข้อมูลสำเร็จ'
    if(mode=='CREATE'){
    const response= await axios.post(`${BASE_URL}/users`,userData)
    console.log('response',response.data);
    }else{
     const response= await axios.put(`${BASE_URL}/users/${selectedId}`,userData)
     message='แก้ไขข้อมูลเรียบร้อย'
     console.log('response',response.data);
    }

    messageDOM.innerText=message
    messageDOM.className='message success'
}catch(error){
    console.log('error message',error.message)
    console.log('error',error.errors)
    
    if(error.response){
      console.log(error.response)
      error.message = error.response.data.message
      error.errors = error.response.data.errors
      }
      
      let htmlData='<div>'
      htmlData += `<div>${error.message}</div>`
      htmlData += '<ul>'
      for(let i=0; i<error.errors.length; i++) {
        htmlData += `<li>${error.errors[i]}</li>`
    }
      htmlData += '</ul>'
      htmlData += '</div>'

    messageDOM.innerHTML= htmlData
    messageDOM.className='message danger'
   }
}