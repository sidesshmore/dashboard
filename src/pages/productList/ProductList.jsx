import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import {productRows} from "../../dummyData";
import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) =>{
        setData(data.filter(item => item.id !== id))
    }

    const productColumns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className="productListUser">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to= {'/product/' + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                        <DeleteOutlineIcon className="productListDelete" onClick={()=> handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];
  return (
    <div className="productList">
                 <DataGrid
                rows={data}
                columns={productColumns}
                pageSize={10}
                disableSelectionOnClick
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
    </div>
  )
}
