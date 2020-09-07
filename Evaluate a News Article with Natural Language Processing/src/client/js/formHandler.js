
const validUrl = require('valid-url');
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (validUrl.isWebUri(formText)) {
     document.getElementById('results').innerText =' ';
    const Datatosave={
     text:formText
    }
    console.log("::: Form Submitted :::")
    Client.postData('http://localhost:8000/Progectdata',Datatosave)
    .then((data)=> {
        var fragment = document.createDocumentFragment();
        for (const key in data) {
         if (data.hasOwnProperty(key)) {
            if(key !='text'){
            let elementtoadd=document.createElement("p");
            elementtoadd.innerText=key+":"+data[key];
            fragment.appendChild(elementtoadd);
            }   
         }
        }

        document.getElementById('results').appendChild(fragment);
        
    })
   } else {
    document.getElementById('results').innerText = 'Please Enter a Valid URL.';
    }
}

export { handleSubmit}
