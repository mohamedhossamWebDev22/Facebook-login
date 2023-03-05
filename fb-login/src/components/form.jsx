import React from 'react';

const Form = () => {
  return (
    <>
      <div className="con2">
        <form>
          <input type="text" placeholder='Email or Phone Number'/>
          <br />
          <input type="text" placeholder='Password'/>
          <br />
          <div className="btns">
            <button id="lg">Log In</button>
            <p>Forgot account?</p>
          </div>

          <button id="cr">Create New Account</button>
        </form>

        
      </div>
    </>
  );
}

export default Form;
