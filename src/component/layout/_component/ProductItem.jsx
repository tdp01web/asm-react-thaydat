import { useState } from "react";
import { AspectRatio } from "@chakra-ui/react";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

function ProductItem({ products }) {
  const [page, setPage] = useState(1); // State để lưu trạng thái trang hiện tại

  const itemsPerPage = 5; // Số sản phẩm hiển thị trên mỗi trang
  const totalProducts = products.length; // Tổng số sản phẩm

  const handleChangePage = (event, newPage) => {
    setPage(newPage); // Cập nhật trang hiện tại khi người dùng chuyển trang
  };

  const startIndex = (page - 1) * itemsPerPage; // Chỉ số của sản phẩm đầu tiên trên trang hiện tại
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage); // Các sản phẩm hiển thị trên trang hiện tại

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[80%] mx-auto gap-2">
        {visibleProducts.map((product, index) => (
          <div
            className="w-[20%] h-auto p-[10px] bg-[#fff] border border-grey-400 shadow flex flex-col justify-between"
            key={index}
          >
            <AspectRatio>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </AspectRatio>

            <span>{product.name} </span>
            <span className="text-[#575757] line-through text-[14px] font-400">
              {product.price}
            </span>
            <span className="font-700 text-[20px] text-[#be1f2d] font-sans-serif">
              {product.price}
            </span>
          </div>
        ))}
      </div>
      {/* Pagination component */}
      <Pagination
        count={Math.ceil(totalProducts / itemsPerPage)} // Tính tổng số trang dựa trên tổng số sản phẩm và số sản phẩm trên mỗi trang
        page={page}
        onChange={handleChangePage}
        variant="outlined"
        shape="rounded"
        className="mt-4"
      />
    </div>
  );
}

export default ProductItem;
