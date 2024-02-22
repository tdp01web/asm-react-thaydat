import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const ProductAddPage = ({onAdd}) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onAdd(data);
    navigate("/admin/products");
    console.log("🚀 ~ onSubmit ~ data:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Thêm Sản Phẩm</h1>
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

export default ProductAddPage;
