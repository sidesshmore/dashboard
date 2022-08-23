import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';


export  var userData = [
    {
        name: 'Jan',
        "Active User": 4000,
    },

    {
        name: 'Feb',
        "Active User": 3000,
    },
    
    {
        name: 'March',
        "Active User": 5000,
    },
    
    {
        name: 'April',
        "Active User": 4100,
    },
    
    {
        name: 'May',
        "Active User": 3300,
    },
    
    {
        name: 'June',
        "Active User": 2800,
    },
    
    {
        name: 'July',
        "Active User": 3950,
    },
    
    {
        name: 'Aug',
        "Active User": 3320,
    },
    
    {
        name: 'Sept',
        "Active User": 4500,
    },

    {
        name: 'Oct',
        "Active User": 3670,
    },
    

    {
        name: 'Nov',
        "Active User": 4900,
    },
    

    {
        name: 'Dec',
        "Active User": 3130,
    },   
];

 export const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
    },
    {
        field: 'transaction',
        headerName: 'Transaction Volume',
        width: 160,
    },
    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <>
                <Link to= {'/user/' + params.row.id}>
                    <button className="userListEdit">Edit</button>
                </Link>
                    <DeleteOutlineIcon className="userListDelete" />
                </>
            )
        }
    }
];

export const userRows = [
    { id: 1, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 2, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 3, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 4, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 5, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 5, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 6, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 7, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 8, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 9, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },

    { id: 10, username: 'Jon Snow', avatar: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*", email: "jon@gmail.com", status: "active", transaction: "1200" },
];