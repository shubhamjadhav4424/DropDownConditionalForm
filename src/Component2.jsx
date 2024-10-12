import React from 'react'
import { useSelector } from 'react-redux'

function Component2() {
    let extract_data=useSelector((state)=>state.counter.userdata);
    
  return (
    <div>
      {
        extract_data.map((ele,ind)=>{
          return(
            <div className='flex justify-center'>
              <div className='grid justify-center'>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>Username</div><div>{ele.username}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>Email</div><div>{ele.email}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>Address</div><div>{ele.address}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>Pincode</div><div>{ele.pincode}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>Contact Number</div><div>{ele.contact}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>Parent or Guardian name</div><div>{ele.guardian}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>10th Marsk</div><div>{ele.ssc}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>12th Marsk</div><div>{ele.hsc}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>CGPA or percentage at graduation</div><div>{ele.graduation}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>School Name</div><div>{ele.school}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>Collage Name</div><div>{ele.collage}</div></div>
                <div className='flex justify-between gap-[50px]'><div className='flex justify-center'>Senior Collage Name</div><div>{ele.senior_collage}</div></div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Component2