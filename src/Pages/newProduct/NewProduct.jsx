import "./newProduct.css";

export const NewProduct = () => {
  return (
    <div className="newProduct">
        <h1 className="newUserTitle">NewProduct</h1>
        <h3 className="productImg">Image <img src="./image/img8.jpg" alt="img" className="productImg" /></h3>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="john Simit" />
          </div>
          <div className="newUserItem">
            <label>Stock</label>
            <input type="Stock" placeholder="123" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="phone" placeholder="New York | USA" />
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </form>
        <button className="newUserButton">Create</button>
    </div>
  );
};
export default NewProduct;
