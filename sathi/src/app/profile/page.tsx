import EmployeeInfo from "@/components/EmployeeInfo";

export default function profile(){
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <EmployeeInfo image='/Girl1.jpeg' name='Rita BK' age='20' gender='female' address='Balkumari,Lalitpur' nationality='Nepali' qualification='BE Software'  />
        </div>
    )
}