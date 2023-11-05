import React from 'react'
import classes from './AddNewAddress.module.css';
function AddNewAddress() {
  return (
    <div className={classes.editFrom}>
        <h3>ADD A NEW ADDRESS</h3>
        <form className={classes.formGropu}>
            <div className={classes.formContainer}>
                <input type="text" placeholder='Name' />
                <input type="tel" placeholder='10-digit mobile number' />
            </div>
            <div className={classes.formContainer}>
                <input type="number"  placeholder='Pincode'/>
                <input type="text" placeholder='Locality' />
            </div>
            <textarea className={classes.addressDescription} name="" id="" cols="43" rows="4" placeholder='Address (area and Street)'></textarea>
            <div className={classes.formContainer}>
                <input type="text" placeholder='City/District/Town' />
                <select placeholder='State' className={classes.seleteState}>
                <option value="" disabled selected>selete State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>
            <div className={classes.formContainer}>
                <input type="text" placeholder='Landmark(optional)' />
                <input type="tel"  placeholder='Altarnative Phone (optional)'/>
            </div>
                <small>Address type</small>
            <div className={classes.formContainer}>
                <label>
                    <input type="radio" name="contactType" value="Home" /> Home
                </label>
                <label>
                    <input type="radio" name="contactType" value="Work" /> Work
                </label>
                </div>
            <div className={classes.addressBtn}>
                <button>Save</button>
                <button>Cancle</button>
            </div>
        </form>
    </div>
  )
}

export default AddNewAddress