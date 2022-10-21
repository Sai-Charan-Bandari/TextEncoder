 //arr , arr2 act as key:value pairs
 let arr=['!','@','#','$','%','^','&','*','(',')','_','-','+','=','`','~','{','}','[',']','|',':',';','<','>','?','a','s','d','f','g','h','j','k','l','q','w','e','r','t','y','u','i','o','p','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9','0'];
 let arr2; //contains actual-characters
 let doc=document.getElementsByTagName('textarea')[0];

 function verify(){
     let val=document.getElementsByTagName('textarea')[0].value;
     console.log(val);
     if(val.substring(0,5)=='#BSC#')
      decode(val.substring(6)) //removing tag line
     else
      encode() 
 }
 function encode(){
 console.log("encoding");
 //create empty value array and create random id
 arr2=[];
 let id="";
 for(let j=0;j<5;j++){
   let k=Math.floor(Math.random()*(arr.length));
    id+=arr[k];
 }
 console.log(id);
 //start endcoding
 let val=doc.value;
 let op="#BSC#\n"; //adding tag line to op string
  op+=id+"\n";  //adding id to op string
 // let conditonObj={}; //contains assigned characters in alphabetical order
 let j=0;
 //initializing arr2 to empty
 for(;j<arr.length;j++){
 arr2[j]="";
 }
 //substituting characters
 for(j=0;j<val.length;j++){
     //we dont need to use any encoding for spaces and new line
     if(val[j]==' ' || val[j]=='\n'){
         op+=val[j]; //either space or new line will be simply added to o/p
         continue; 
     }
     let k;
     if(arr2.indexOf(val[j])!=-1){
         //the character has already occurred earlier
         //hence an encoding character already exists
         k=arr2.indexOf(val[j]);
     }
     else{
      k=Math.floor(Math.random()*(arr.length));
         while(arr2[k]!=""){
          k=Math.floor(Math.random()*(arr.length));
         }
         arr2[k]=val[j];//adding actual char to arr2
     }
     op+=arr[k];//adding endcoded char to op
     console.log(k+" : "+val[j]+" = "+arr[k])
     }
 console.log(op);
 console.log(arr2);
 //displaying encoded text
 doc.value=op;
 //setItem
 localStorage.setItem(id,JSON.stringify(arr2));
 }
////////////////////////////////////    
 function decode(val){
     console.log('decoding');
     //finding id and checking if it exists
     let id=val.substring(0,5);
     //get all characters after the id,'\n' part
     val=val.substring(6);
     arr2=localStorage.getItem(id);
     if(arr2==null){
        console.log("this id doesnot exist")
        return;
     }
     //else decode
     arr2=JSON.parse(arr2);
    //  console.log(arr2);
     let op="";
     for(let j=0;j<val.length;j++){
         // console.log('the '+j+"th character is "+val[j]);
         if(val[j]==' ' || val[j]=='\n'){
             op+=val[j];
             continue;
         }
         let index=arr.indexOf(val[j])
        //  console.log(val[j]);
         op+= arr2[index];
     }
     doc.value=op;
     console.log(op);
     //remove item from localStroage
     localStorage.removeItem(id);
 }
 
 
