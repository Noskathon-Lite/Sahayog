import EmployeeCard from "@/components/EmployeeCard";

export default function Home(){
  return (
    <div style={{display:'flex',width:'100%',gap:10,rowGap:40, justifyContent:'space-evenly',flexWrap:'wrap', alignItems:'flex-start'}}>
      <EmployeeCard image='/Girl2.jpeg' name='Sahara Ghimire'/>
      <EmployeeCard image='/Girl2.jpeg' name='Bineeta Khanal'/>
      <EmployeeCard image='/Girl2.jpeg' name='Sneha Khanal'/>
      <EmployeeCard image='/male2.jpeg' name='Naran Acharya'/>
      <EmployeeCard image='/male2.jpeg' name='Aadesh Khanal'/>
      <EmployeeCard image='/male2.jpeg' name='Sonup Sharma'/>

    </div>
  )
}