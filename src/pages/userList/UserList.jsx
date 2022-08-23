import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {userRows, userColumns} from "../../dummyData";



export default function UserList() {
   
    return (
        <div className="userList">
            <DataGrid
                rows={userRows}
                columns={userColumns}
                pageSize={10}
                disableSelectionOnClick
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
