import { addStudent } from "@/app/helpers/actions"


export default function AddPage() {
  


  return (
    <>    
   <h1>Add Student</h1>
   <div>
    <form action={addStudent}>
        <input type="text" className='form-control mb-3' id='name' name="name" placeholder="Enter the name" />
         <input type="text" className='form-control mb-3' id='studentClass' name="studentClass" placeholder="Enter the class" />
          <input type="text" className='form-control mb-3' id='gpa' name="gpa" placeholder="Enter the gpa" />
          <button type="submit" className='btn btn-primary'>Add Student</button>
    </form>
   </div>
   </>
  )
}
