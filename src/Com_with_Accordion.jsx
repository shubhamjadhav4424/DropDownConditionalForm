import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { transfer_com2 } from './counterSlice';

function Com_with_Accordion() {

  let dispatch= useDispatch();
  let navigate= useNavigate();

  let [username,setUsername]= useState();
  let [email, setEmail]= useState();
  let [address, setAddress]= useState("");
  let [pincode, setPincode]= useState();
  let [contact, setContact]= useState();
  let [guardian, setGuardian]= useState();
  let [professional, setProfessional]= useState();
  let [personal, setPersonal] = useState();
  let [educational, setEducational]= useState();
  let [ssc, setSsc]= useState();
  let [hsc, setHsc]= useState();
  let [graduation, setGraduation]= useState();
  let [school, setSchool]= useState();
  let [collage, setCollage]= useState();
  let [senior_collage, setSenior_collage]= useState();
  

  let [validemail,setValidemail]= useState();
  let [validprofessional,setValidprofessional]= useState();
  let [valideducational, setvalideducational]= useState();
  

  function onChangeHandler_Email(e){
    setUsername(e.target.value);
  }

  function onChangeHandler_username(e){
    setEmail(e.target.value);
  }

  function onChangeHandler_address(e){
    setAddress(e.target.value)
  }

  function onChangeHandler_pincode(e){
    setPincode(e.target.value)
  }

  function onChangeHandler_contact(e){
    setContact(e.target.value)
  }

  function onChangeHandler_guardian(e){
    setGuardian(e.target.value);
  }

  function onChangeHandler_ssc(e){
    setSsc(e.target.value);
  }

  function onChangeHandler_hsc(e){
    setHsc(e.target.value);
  }

  function onChangeHandler_graduation(e){
    setGraduation(e.target.value);
  }

  function onChangeHandler_school(e){
    setSchool(e.target.value);
  }

  function onChangeHandler_collage(e){
    setCollage(e.target.value);
  }

  function onChangeHandler_senior_collage(e){
    setSenior_collage(e.target.value);
  }


  function validationfor_professional(){
    let trim_email= username.split(' ').join('');

    let regexforUsername= /^[a-zA-z]{1,}$/;
    let isValidUsername= regexforUsername.test(trim_email);
    
    let regex1 = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    let isvalidEmail= regex1.test(email);

    let final_validation_professional= isValidUsername && isvalidEmail == true;

    if(final_validation_professional==true){
      setProfessional("Professional details saved, now fill the personal details.")
    }
    else{
      setProfessional("Enter valid details, username or email should be mention in valid format to proceed further.")
    }

    setValidemail(final_validation_professional);

  }

  function validationfor_personal(){

    let trim_address= address.split(' ').join('');
    let guardian_name= guardian.split(' ').join('');
    

    let regex1= /^[a-zA-Z0-9_.,+\-]{1,}$/;
    let isvalidAddress=regex1.test(trim_address);
    
    let regex2= /^[0-9]{6,}$/;
    let isvalidPincode= regex2.test(pincode);

    let regex3= /^[0-9]{10,}$/;
    let isValidMobile= regex3.test(contact);

    let regex4= /^[a-zA-Z]{1,}$/;
    let isvalidGuardian=regex4.test(guardian_name);

    let final_validation= isvalidAddress && isvalidPincode && isValidMobile && isvalidGuardian ==true;

    if(final_validation==true){
      setPersonal("Professional details saved, now fill the educational details.");
    }

    else{
      setPersonal("Enter valid details as asked. Please note pincode must be 6 digit, Mobile Number should contains 10 digits, address and guardian name should not be empty.");
    }

    setValidprofessional(final_validation);
    
  }



  function validationfor_educational(){
    let regex1=/^[0-9.00%]{1,}$/;
    let isValidsscmarks= regex1.test(ssc);

    let isValidhscmarks= regex1.test(hsc);
    
    let isValidgraduationmarks= regex1.test(graduation);


    let trim_school_name= school.split(' ').join('');
    let trim_collage_name= collage.split(' ').join('');
    let trim_senior_collage_name= senior_collage.split(' ').join('');

    let regexforeducational=/^[a-zA-Z0-9_.,+\-]{1,}$/;
    let isValidSchoolName=regexforeducational.test(trim_school_name);

    let isValidCollageName= regexforeducational.test(trim_collage_name);

    let isValidSeniorCollageName= regexforeducational.test(trim_senior_collage_name);


    let final_validation_edu= isValidsscmarks && isValidhscmarks && isValidgraduationmarks && isValidSchoolName && isValidCollageName && isValidSeniorCollageName == true;

    if(final_validation_edu==true){
      setEducational("All required details saved successfully.");
    }

    else{
      setEducational("Enter valid details as asked. Marks should be mentioned in number, you can also include decimals with %. School or collage name in the text format.");
    }

    setvalideducational(final_validation_edu);
  }



  function onClickHandler_submit(){
    let saved_data={
      username,
      email,
      address,
      pincode,
      contact,
      guardian,
      professional,
      personal,
      educational,
      ssc,
      hsc,
      graduation,
      school,
      collage,
      senior_collage,
    }
    
    dispatch(transfer_com2(saved_data));

    navigate('/Second');
    
  }



  return (

    <>
 <div className="flex justify-center gap-[300px] pt-[50px] pb-[50px]">
        <div className={validemail?"circle_green":"circle_comman"}>1</div>
           <div className={validprofessional?"circle_green":"circle_comman"}>2</div>

           <div className={valideducational?"circle_green":"circle_comman"}>3</div>
           </div>


    <div className='flex justify-center'>
      <div className='flex justify-center'>
      <Accordion>

<Accordion.Item eventKey="0">
  <Accordion.Header>Professional</Accordion.Header>
  <Accordion.Body>
    <div className='flex justify-center gap-[100px]'>
    <input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" placeholder='Enter Username' value={username} onChange={(e)=>onChangeHandler_Email(e)} name="" id="" />
    <input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" placeholder='Enter Email' value={email} onChange={(e)=>onChangeHandler_username(e)} name="" id="" />
    </div>

    <div className='pt-[20px] pb-[20px] flex justify-center'>{professional}</div>
    <div className='flex justify-center'><button className='p-[10px] bg-[blue]' onClick={()=>validationfor_professional()}>Save</button></div>
  </Accordion.Body>
</Accordion.Item>

<div>
  {
    validemail?
    <>
    <Accordion.Item eventKey="1">
    <Accordion.Header>Personal</Accordion.Header>
    <Accordion.Body>
      <div className='grid justify-center gap-[10px]'>
        <div className='flex justify-center gap-[50px]'> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" placeholder='Enter Address' value={address} onChange={(e)=>onChangeHandler_address(e)} name="" id="" /></div> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" value={pincode} placeholder='Enter Pincode' onChange={(e)=>onChangeHandler_pincode(e)} name="" id="" /></div> </div>
        <div className='flex justify-center gap-[50px]'> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" placeholder='Enter Contact Number' value={contact} onChange={(e)=>onChangeHandler_contact(e)} name="" id="" /></div> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" value={guardian} placeholder='Enter Parent or Guardian name' onChange={(e)=>onChangeHandler_guardian(e)} name="" id="" /></div></div>
        <div className='pt-[20px] pb-[20px] flex justify-center'>{personal}</div>
        <div className='flex justify-center'><button className='p-[10px] bg-[blue]' onClick={()=>validationfor_personal()}>Save</button></div>
      </div>
    </Accordion.Body>
    </Accordion.Item>
    </>
    :
    <>
    <Accordion.Item eventKey="1">
    <Accordion.Header>Personal</Accordion.Header>
    <Accordion.Body>

    </Accordion.Body>
  </Accordion.Item>
  </>
  }
</div>


<div>
  {
    validprofessional==true?
    <>
  <Accordion.Item eventKey="2">
  <Accordion.Header>Educational</Accordion.Header>
  <Accordion.Body>
  <div className='grid justify-center gap-[10px]'>
        <div className='flex justify-center gap-[50px]'> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" placeholder='Enter 10th Marks' value={ssc} onChange={(e)=>onChangeHandler_ssc(e)} name="" id="" /></div> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" value={school} placeholder='Enter School Name' onChange={(e)=>onChangeHandler_school(e)} name="" id="" /></div> </div>
        <div className='flex justify-center gap-[50px]'> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" placeholder='Enter 12th Marks' value={hsc} onChange={(e)=>onChangeHandler_hsc(e)} name="" id="" /></div> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" value={collage} placeholder='Enter Junior Collage name' onChange={(e)=>onChangeHandler_collage(e)} name="" id="" /></div></div>
        <div className='flex justify-center gap-[50px]'> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" placeholder='Enter CGPA or Percentage' value={graduation} onChange={(e)=>onChangeHandler_graduation(e)} name="" id="" /></div> <div><input className='pl-[10px] w-[250px] border-[2px] border-[black]' type="text" value={senior_collage} placeholder='Enter Senior Collage name' onChange={(e)=>onChangeHandler_senior_collage(e)} name="" id="" /></div></div>
        <div className='pt-[20px] pb-[20px] flex justify-center'>{educational}</div>
        <div className='flex justify-center'><button className='p-[10px] bg-[blue]' onClick={()=>validationfor_educational()}>Save</button></div>
      </div>
  </Accordion.Body>
  </Accordion.Item>
    </>
    :
    <>
  <Accordion.Item eventKey="2">
  <Accordion.Header>Educational</Accordion.Header>
  <Accordion.Body>

  </Accordion.Body>
  </Accordion.Item>
    </>
  }
</div>

</Accordion>
      </div>
    </div>

    <div className='flex justify-center'>
      {
        valideducational?
        <><button className='p-[15px] bg-[black] text-white rounded-[28px]'onClick={()=>onClickHandler_submit()} >submit</button></>
        :
        <></>
      }
    </div>

    </>
  );
}

export default Com_with_Accordion;