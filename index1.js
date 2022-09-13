let billNext = document.getElementById('billNext');
let Calculate = document.getElementById('Calculate');
let bill =document.getElementById('bill');
let cash =document.getElementById('cash');
let givenCash=document.getElementById('givenCash');
let notes=document.getElementById('notes');
let alrt=document.getElementById('alertdiv');
givenCash.style.display="none";
notes.style.display="none";
alrt.style.display="none";

let retrunCash=[500,200,100,50,20,10,2,1];


billNext.addEventListener('click',()=>{
    check();
});

Calculate.addEventListener('click',(e)=>{
    e.preventDefault();
    let n=[0,0,0,0,0,0,0,0];
    let Bill=Number(bill.value);
    let Cash=Number(cash.value);
    if(Cash==' ' || Cash<Bill){
        alrts("danger","Error","Amount should be greater than bill");
    }
    else if(Bill==' '){
        alrts("danger","Error","Could not Proceed");
    }
    else{
    let rem=Cash-Bill;
    let amt = document.getElementById('amt');
    amt.innerText=rem;
 
     for (let index = 0; index < retrunCash.length; index++) {
         if(rem>=retrunCash[index] && rem!=0){
       while (rem>=retrunCash[index])  {
              n[index]+=1;
              rem=rem-retrunCash[index];
       }
         
         if(rem==0){
             console.log("completed");
         }
        }
         }
         bill.value="";
         cash.value="";
         notes.style.display="block";
         let tb=document.getElementById('tb');
         let tbl="";
         tbl+=` <thead>
         <tr>
           <th scope="col">500</th>
           <th scope="col">200</th>
           <th scope="col">100</th>
           <th scope="col">50</th>
           <th scope="col">20</th>
           <th scope="col">10</th>
           <th scope="col">2</th>
           <th scope="col">1</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>${n[0]}</td>
           <td>${n[1]}</td>
           <td>${n[2]}</td>
           <td>${n[3]}</td>
           <td>${n[4]}</td>
           <td>${n[5]}</td>
           <td>${n[6]}</td>
           <td>${n[7]}</td>
         </tr>
       </tbody>`;
       tb.innerHTML=tbl;
         
     }
        
    
});


function check(){
   let Bill=Number(bill.value);
   let Cash=Number(cash.value);
    if(Bill>0){
        givenCash.style.display="block";

    }
    else if(Bill==' '){
        alrts("danger","Error","Could not Proceed");
    }
    else if(Cash==' ' || Cash<bill){
        alrts("danger","Error","Amount should be greater than bill");
    }
}
function alrts(al,title,msg){
    
    alrt.style.display="block";
    let html="";
    html+=` <div class="alert alert-${al} alert-dismissible fade show" role="alert" id="alert">
    <strong>${title}!</strong> ${msg}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  alrt.innerHTML=html;
  setTimeout(() => {
      alrt.style.display="none";
  }, 2000);
}