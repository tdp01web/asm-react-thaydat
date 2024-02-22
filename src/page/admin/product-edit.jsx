import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/product";
const ProductEditPage = ({onUpdate}) => {
    const {id} = useParams()
  const { register, handleSubmit , reset} = useForm();
  const navigate = useNavigate();
  useEffect(()=>{
    (async() => {
        const data = await getProductById(id);
        reset(data)
    })()
  },[id])
  const onSubmit = (data) => {
    onUpdate(data);
    navigate("/admin/products");
    console.log("🚀 ~ onSubmit ~ data:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Cập Nhật Sản Phẩm</h1>
      </div>

      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Tên Sản Phẩm
        </label>
        <input
          type="text"
          className="form-control"
          id="productName"
          {...register("name")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productImage" className="form-label">
          Ảnh Sản Phẩm
        </label>
        <input
          type="text"
          className="form-control"
          id="productImage"
          {...register("image")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Giá Sản Phẩm
        </label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          {...register("price")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productDesc" className="form-label">
          Mô tả sản phẩm
        </label>
        <textarea
          name=""
          {...register("description")}
          className="form-control"
          id="productDesc"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Thêm
      </button>
    </form>
  );
};

export default ProductEditPage;
