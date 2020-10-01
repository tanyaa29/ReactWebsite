import React, { useState } from 'react';

const Contact = () => {
    const[data, setData]= useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const InputEventt= (event)=>{
        const {name, value}= event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };

   const formSubmit=(e)=>{
       e.preventDefault();
       alert(` Hello, ${data.name} Your frpm is successfully Submitted`)

   }
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Me</h1>
        </div>
        <div className="container contact_div">
            <div className="row"></div>
             <div className="col-md-6 col-10 mx-auto">
             <form onSubmit={formSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1">
    Enter Your Name
    </label>
    <input type="text" 
    class="form-control"
     id="your-name" 
     name="name"
     value={data.name}
     onChange={InputEventt}
     placeholder="Enter your Name"       
     />
    <label for="exampleInputEmail1">
    Email address
    </label>
    <input type="email" 
    class="form-control"
     id="exampleInputEmail1" 
     name="email"
     value={data.email}
     onChange={InputEventt}
     placeholder="Enter your Email"       
     />
    <label for="exampleInputEmail1">
    Contact
    </label>
    <input type="phone" 
    class="form-control"
     id="exampleInputEmail1"
     name="phone"
     value={data.phone} 
     onChange={InputEventt}
     placeholder="Enter your Mobile no"       
     />
    <label for="exampleInputEmail1">
    Message
    </label>
    <textarea type="text" 
    class="form-control"
     id="exampleInputEmail1"
     row="3" 
     name="message"
     value={data.message}
     onChange={InputEventt}
           
     />
    
  </div>
  
  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>
             </div>
        </div>
        </>
    )
}
export default Contact;