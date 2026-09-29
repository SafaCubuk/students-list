 'use server'
import { redirect } from "next/navigation";


 export async function addStudent(formData){
      await fetch('http://localhost:3005/students',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:formData.get('name'),
                studentClass:formData.get('studentClass'),
                gpa:formData.get('gpa')
            })
        });
        redirect('/')               
        return{success:true,message:"Added"};
       
 }