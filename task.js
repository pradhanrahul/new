let addBtn=document.getElementById("add-btn");
let addTitle=document.getElementById("note-title")
let addTxt=document.getElementById("note-text")

addBtn.addEventListener("click",(e)=>{
//console.log("add btn clicked")
    if(addTitle.value=="" || addTxt.value ==""){
             return alert("please add the note title and details");     
    }
       let notes=localStorage.getItem("notes");
       if(notes==null){
           notesObj=[];

       } 
       else{
           notesObj=JSON.parse(notes);
       }
       let myObj={
           title:addTitle.value,
           txt:addTxt.value
           
       }
      // console.log(myObj)
       notesObj.push(myObj);
       localStorage.setItem("notes", JSON.stringify(notesObj));
       addTitle.value="";
           addTxt.value="";
         //  console.log(notesObj);

           showNotes();


})

function showNotes(){
    let notes=localStorage.getItem("notes")
    if(notes==null){
        notesObj=[];

    } 
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html+= `
        <div id="notes">
        <p class="note-countre">note ${index+1} </p>
        <h3 class="note-title">${element.title}</h3>
        <p class="note-text">${element.txt} </p>
        <button  id="${index}" onclick="deleteNote(this.id)"  class="note-btn">Delete Note</button>
    </div>
           `;
        
    });
    let noteElm=document.getElementById("notes");
    if(notesObj.length !=0){
        noteElm.innerHTML=html;
    }else{
        noteElm.innerHTML="note doesnote yet! Add a note ";
    }
}
showNotes();

function deleteNote(index){
    let confirmDelete=confirm("Are you sure to delete the note...");
    if(confirmDelete == true){
        let notes=localStorage.getItem("notes");
    
    if (notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
}

