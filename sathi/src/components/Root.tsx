import { BorderAllRounded, BorderOuterRounded } from "@mui/icons-material";
import EmployeeCard from "./EmployeeCard";
import NavBar from "./NavBar";

export default function Root(){
    return (
        <div>
            <NavBar/>
            <div>
                <EmployeeCard/>
            </div>
        </div>
    )
}