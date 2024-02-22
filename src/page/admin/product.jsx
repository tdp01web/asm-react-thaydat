/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductPage = ({ products, onRemove }) => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản Lý Sản Phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link to="/admin/products/add"  className="btn btn-sm btn-outline-secondary">
              Thêm
            </Link>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
          >
            <svg className="bi">
              <use xlinkHref="#calendar3" />
            </svg>
            This week
          </button>
        </div>
      </div>

      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((products, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={products.image}
                    alt={products.name}
                    className="w-[50px] h-[50px]"
                  />
                </td>
                <td>
                  <span>{products.name}</span>
                </td>
                <td>
                  <span>{products.price}</span>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => onRemove(products.id)}
                    >
                      Xóa
                    </button>
                    <Link to={`/admin/products/${products.id}/edit`} className="btn btn-primary">Sửa</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPage;
