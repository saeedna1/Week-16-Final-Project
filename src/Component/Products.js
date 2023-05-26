 // The code imports the necessary modules and functions from the React 
 //library and sets up the initial state using the useState hook.
import React, { useEffect, useState } from "react";

 //functional component called Products and exports it. 
 //within this component, it initializes the state variable content using the useState hook. 
 //the initial value of content is set to the component 
export function Products() {
  const [content, setContent] = useState(<ProductList showForm={showForm} />);

 // function to show the product list
  function showList() {
    setContent(<ProductList showForm={showForm} />);
  }
 //function to show the product form
  function showForm(product) {
    setContent(<ProductForm product={product} showList={showList} />);
  }

  return <div className="container my-5">{content}</div>;
}


  //this function  ProductList component - displays the list of products
function ProductList(props) {
  const [products, setProducts] = useState([]);

 // Fetch products from the API  make get request to retrieve the products
  function fetchProducts() {
    fetch("https://645a846595624ceb21044cb2.mockapi.io/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unexpected Server Response");
        }
        return response.json();
      })
      // update the products state with the retrieved data
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Error: ", error));
  }
  // Fetch the products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);
 
  // function to Delete product
  // make a DELETE request to remove the product from the API
  function deleteProduct(id) {
    fetch("https://645a846595624ceb21044cb2.mockapi.io/products/" + id, {
      method: "DELETE",
    })
    // Fetch the updated products list
      .then((response) => response.json())
      .then((data) => fetchProducts());
  }
 
  //return the data
  return (
    <>
     {/* Display product list */}
      <h2 className="text-center mb-3">List of Products</h2>
      {/* Button to create a new product */}
      <button onClick={() => props.showForm({})} type="button" className="btn btn-primary me-2">
        Create
      </button>

       {/* Button to refresh a new product list */}
      <button onClick={() => fetchProducts()} type="button" className="btn btn-outline-primary me-2">
        Refresh
      </button>
      
      <div className="container-fluid"> 
      <table className="table table-striped table-hover ">
        {/* Table header */}
        <thead className=" ">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

            {/* iterate over products and display each product */}
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}$</td>
                <td>{product.createdAt}</td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>

                     {/* Button to edit a product */}
                  <button onClick={() => props.showForm(product)} type="button" className="btn btn-primary btn-sm me-2">
                    Edit
                  </button>

                  {/* Button to delete a product */}
                  <button onClick={() => deleteProduct(product.id)} type="button" className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>  
    </>
  );
}
 
// ProductForm component  displays a form to create/edit a product

function ProductForm(props) {
  const [errorMessage, setErrorMessage] = useState("");

   // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    //read form data
    const formData = new FormData(event.target);

    //convert formData to object
    const product = Object.fromEntries(formData.entries());

    // form validation
    if (!product.name || !product.brand || !product.category || !product.price) {
      console.log("Please provide all the required fields!");
      setErrorMessage(
        <div className="alert alert-warning" role="alert">
          Please provide all the required fields!
        </div>
      );
      return;
    }

    //The condition if (props.product.id) checks if the id property exists in the props.
    //product object. This condition is used to determine whether the operation is an update or a creation of a new product.

    if (props.product.id) {
      //update the product return from API
      fetch("https://645a846595624ceb21044cb2.mockapi.io/products/" + props.product.id, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          return response.json();
        })
        .then((data) => props.showList(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      

        //initiates a POST for creating and request to the specified URL from API
      product.createdAt = new Date().toISOString().slice(0, 10);
      fetch("https://645a846595624ceb21044cb2.mockapi.io/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          return response.json();
        })
        .then((data) => props.showList(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <>  {/* Display product form */}
      <h2 className="text-center mb-3">{props.product.id ? "Edit Product" : "Create New Products"}</h2>

      <div className="row ">
        <div className="col-lg-6 mx-auto">
          {errorMessage}
          <form onSubmit={handleSubmit}>
            {props.product.id && (
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">ID</label>
                <div className="col-sm-8">
                  <input readOnly className="form-control-plaintext" name="id" defaultValue={props.product.id} />
                </div>
              </div>
            )}

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-8">
                <input className="form-control" name="name" defaultValue={props.product.name} />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Brand</label>
              <div className="col-sm-8">
                <input className="form-control" name="brand" defaultValue={props.product.brand} />
              </div>
            </div>
             {/* Display product category */}
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Category</label>
              <div className="col-sm-8">
                <select className="form-select" name="category" defaultValue={props.product.category}>
                  <option value="Other">Other</option>
                  <option value="Phones">Phones</option>
                  <option value="Computers">Computers</option>
                  <option value="Accessories">Accessories</option>
                  <option value="GPS">GPS</option>
                  <option value="Cameras">Cameras</option>
                </select>
              </div>
            </div>
             {/* Display product price */}
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Price</label>
              <div className="col-sm-8">
                <input className="form-control" name="price" defaultValue={props.product.price} />
              </div>
            </div>
              {/* Display product description */}
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Description</label>
              <div className="col-sm-8">
                <textarea className="form-control" name="description" defaultValue={props.product.description} />
              </div>
            </div>
            {/* save button*/}
            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary btn-sm me-3">
                  Save
                </button>
              </div>
                {/* cancel button */}
              <div className="col-sm-4 d-grid">
                <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}





