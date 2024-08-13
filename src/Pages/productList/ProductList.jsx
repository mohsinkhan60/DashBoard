import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ProductList = () => {

  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "User",
      headerName: "Users",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "status",
      width: 90,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productListbuttons">
            <Link to={"/product/"+params.row.id}>
            <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
export default ProductList;
