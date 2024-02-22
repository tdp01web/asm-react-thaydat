import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addProduct,
  getProduct,
  removeProductById,
  updateProduct,
} from "./api/product";
import AdminLayOut from "./component/admin";
import ShopLayOut from "./component/layout";
import DashboardPage from "./page/admin/dashboard";
import ProductPage from "./page/admin/product";
import ProductAddPage from "./page/admin/product-add";
import ProductEditPage from "./page/admin/product-edit";
import Signin from "./component/login/Signin";
import Signup from "./component/login/Signup";
import ProductDetailPage from "./component/layout/_component/ProductDetailPage ";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProduct();
      console.log("🚀 ~ data:", data);
      setProducts(data);
    })();
  }, []);
  const onHandleRemove = async (id) => {
    const confirm = window.confirm("Are you sure");
    if (confirm) {
      try {
        await removeProductById(id);
        toast.success("Xóa Sản Phẩm Thành Công");
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        toast.error("Xóa sản phẩm không thành công");
      }
    }
  };
  const onHandleAdd = async (product) => {
    console.log("🚀 ~ onHandleAdd ~ product:", product);
    try {
      const data = await addProduct(product);
      toast.success("Thêm Sản Phẩm Thành Công");
      setProducts([...products, data]);
    } catch (error) {
      toast.error("Thêm Sản Phẩm khong Thành Công");
    }
  };
  const onHandleUpdate = async (product) => {
    console.log("🚀 ~ onHandleAdd ~ product:", product);
    try {
      await updateProduct(product);
      toast.success("Sửa Sản Phẩm Thành Công");
      setProducts(
        products.map((item) => (item.id === product.id ? product : item))
      );
    } catch (error) {
      toast.error("Sửa Sản Phẩm Không Thành Công");
    }
  };
  // const onhandleProduct = async (product) =>{

  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopLayOut />} />
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        
        <Route path="admin" element={<AdminLayOut />}>
          <Route path="" element={<DashboardPage />} />
          <Route
            path="products"
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          />
          <Route
            path="products/add"
            element={<ProductAddPage onAdd={onHandleAdd} />}
          />
          <Route
            path="products/:id/edit"
            element={<ProductEditPage onUpdate={onHandleUpdate} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
