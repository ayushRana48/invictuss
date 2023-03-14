import React from "react";
import TestimonyBox from "./TestimonyBox";


export default function Testimonials() {

    const testimonals =[{name:"Rikesh",role:"DevOps Manager" ,text:"“Invictuss helped us integrate security into our ENTIRE development process, including the code writing itself, alongside with establishing security guilds and nominating “champions” from within the coding teams, leading to improved security and raised awareness. Their team provided us with more than knowledge. They changed the way we work, for the best!”"},
                        {name:"Emily",role:"Production Engineer", text:"“Invictuss understands the importance of modern technology in today's business landscape. With their help, we were able to implement modern OT solutions that have transformed our company. The new technology has greatly improved our efficiency and reduced downtime, which has had a positive impact on our revenue. Their expertise in OT is unmatched, and I would highly recommend their services.”"}]  

    const testimonalList=testimonals.map((x) => <TestimonyBox name={x.name} text={x.text} role={x.role}/>)


  return (
    <div className="flex items-center flex-col p-20">
      <div className="bg-[#04142A] rounded-lg p-6 pb-9 flex flex-col">
        <div className="relative">
          <p className="tracking-tight text-white text-m md:text-lg lg:text-lg">
            &ldquo;Invictuss provided exceptional service in securing our cloud
            infrastructure. Their team of experts were able to identify and
            mitigate several vulnerabilities that could have resulted in a
            major security breach. They were also able to provide practical
            solutions that were easy to implement and maintain. We highly
            recommend their services to any company looking to secure their
            cloud infrastructure&rdquo;
          </p>
        </div>
        <div className="text-white py-6">
          <p className="text-white text-md">Daniel</p>
          <p className="text-md text-light-gray">Cheif Technical Officer</p>
        </div>
      </div>
      <div>
       
      </div>
      <div className="flex gap-x-20">
        {testimonalList}
      </div>
    </div>
  );
}