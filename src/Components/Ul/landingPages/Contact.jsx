import React from 'react'
import classes from './Contact.module.css';
function Contact() {
  return (
    <div className={classes.contactpage}>
        <section className={classes.details}>
            <div>
                <h1 className={classes.contact}>Contact us</h1>
                <h2>Let’s discuss your project.</h2>
                <form className={classes.formgroup}>
                    <input type="text" placeholder='Full name*' />
                    <input type="email" placeholder='Email*' />
                    <input type="number" placeholder='Phone number' />
                    <input type="text" placeholder='message'/>
                <p>Your personal data will be processed by Forbytes according to our Privacy and Cookies Policy.
                   We respect your personal data and guarantee it’s safety.
                </p>

                <button>submit</button>
                </form>
            </div>

            {/* <div className={classes.dev}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet
                    facilis aspernatur dolore provident. Temporibus, esse natus obcaecati 
                    upiditate, maxime distinctio nulla ex eos ab rem id voluptatem, 
                    aspernatur possimus.
                </p>

                <div className={classes.devDetails}>
                    <img src='https://yt3.googleusercontent.com/ytc/APkrFKaSGWd4kJs2FzQ8cwGDgpmrp-kqSjjjeEe1EmTesA=s900-c-k-c0x00ffffff-no-rj' alt='backendDev'/>
                    <div>
                     <h2 className={classes.name}>Harish Kumar</h2>
                     <small>Backend Developer</small>
                    </div>
                </div>
            </div> */}
        </section>
    </div>
  )
};

export default Contact