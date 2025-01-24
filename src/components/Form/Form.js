import React, { useState } from "react";
import './Form.scss';


const MyForm = () => {

     const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        reference: "",
        notice: "",
      });
    
      const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        reference: false,
        notice: false,
      });
      const [hasError, setHasError] = useState(false); 
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        setErrors({ ...errors, [name]: false });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const newErrors = {
          firstName: formData.firstName.trim() === "",
          lastName: formData.lastName.trim() === "",
          email: formData.email.trim() === "",
          reference: formData.reference.trim() === "",
          notice: formData.notice.trim() === "",
        };
    
        setErrors(newErrors);
    
        const hasErrors = Object.values(newErrors).some((error) => error);
        setHasError(hasErrors);
        if (!hasErrors) {
          alert("Form submitted successfully!");
        }
      };
    

    return (
        <div class="section-container">
            <div class="header-container">
            <h1>Contact</h1>
            </div>
            <div class="main-container">
            <div class="form-container">
                <form action="#" id="myForm" onSubmit={handleSubmit} class="form">
                {hasError && ( 
                        <div className="error-container" style={{ color: "red", marginBottom: "10px" }}>
                        <div>There was a problem with your post. Errors are marked below.</div>
                        </div>
                    )}

                <div class="name-container">
                    <div class="name-sub-container-one">
                    <label for="">
                        First name <span style={{ color: "red" }}>*</span>
                    </label>
                    <br />
                    <input
                        type="text"
                        placeholder="First name"
                        class="firstName"
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        style={{
                            border: errors.firstName ? "2px solid red" : "2px solid black",
                          }}                   
                    />
                    {errors.firstName && (
                        <span id="fname-error" style={{ color: "red" }}>
                            First name is required.
                        </span>
                    )}
                    </div>
                    <div class="name-sub-container-two">
                    <label for="">
                        Last name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Last name"
                        class="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        style={{
                            border: errors.lastName ? "2px solid red" : "2px solid black",
                          }}   
                    />
                   {errors.lastName && (
                    <span id="lname-error" style={{ color: "red" }}>
                        Last name is required.
                    </span>
                    )}
                    </div>
                </div>
                <br></br>

                <div class="email-container">
                    <label for="email">
                    Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          border: errors.email ? "2px solid red" : "2px solid black",
                        }} 
                    />
                    {errors.email && (
                        <span id="email-error" style={{ color: "red" }}>
                            Email is required.
                        </span>
                    )}
                </div>
                <br></br>

                <div class="reference-container">
                    <label for="reference">
                    Reference <span style={{ color: "red" }}>*</span>
                    </label>
                    <input 
                        type="text" 
                        class="reference" 
                        name="reference"
                        value={formData.reference}
                        onChange={handleInputChange}
                        style={{
                            border: errors.reference ? "2px solid red" : "2px solid black",
                          }} 
                    />
                    {errors.reference && (
                        <span id="reference-error" style={{ color: "red" }}>
                            Reference is required.
                        </span>
                    )}
                </div>
                <br></br>

                <div class="notice-container">
                    <label for="Notice">
                    Notice <span style={{ color: "red" }}>*</span>
                    </label>
                    <textarea 
                    value={formData.notice}
                    onChange={handleInputChange} 
                    class="notice" 
                    name="notice"
                    style={{
                        border: errors.notice ? "2px solid red" : "2px solid black",
                      }}
                    />

                    {errors.notice && (
                        <span id="notice-error" style={{ color: "red" }}>
                            Notice is required.
                        </span>
                    )}
                </div>
                <br></br>
                <div id="error-message" style={{ display: "none" }}></div>
                <button type="submit">Send</button>
                </form>           
            </div>
            <div class="ad-section">
                <hr />
                <p>Advertisement</p>
                </div>
            </div>
        </div>
    );
};

export default MyForm; 