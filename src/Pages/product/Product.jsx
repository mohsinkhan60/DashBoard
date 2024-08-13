import { NavLink } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import PublishIcon from '@mui/icons-material/Publish';

export const Product = () => {
  return (
    <div className="Product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Products</h1>
        <NavLink to="/newproduct">
          <button className="productAddButton">create</button>
        </NavLink>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="../image/img8.jpg" alt="" className="productInfoImage" />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5124</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">inStock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <div className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <lable>In Stock</lable>
            <select name="inStock" id="IdStock" >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <lable>Active</lable>
            <select name="active" id="active" >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          
            <div className="productUplode">
            <div className="productFormRight">
            <img src="../image/img8.jpg" alt="" className="productUplodeImg" />
            <label htmlFor="file">
              <PublishIcon />
              <input type="file" id="file" style={{display: "none"}} />
            </label>
          </div>
          <button className="productButton">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
