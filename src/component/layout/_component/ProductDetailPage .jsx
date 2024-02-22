// Trong file ProductDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../api/product";
import Header from "./Header";
import MenuLayout from "./MenuLayout";
import BannerSmall from "./BannerSmall";
import { AiTwotoneGift } from "react-icons/ai";

const ProductDetailPage = () => {
  const { id } = useParams(); // sử dụng useParams hook để lấy id từ URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Lấy thông tin sản phẩm dựa trên id từ URL
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); // Thêm id vào dependency array để useEffect re-run khi id thay đổi

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MenuLayout />
      <BannerSmall />
      <div className="w-[80%] mx-auto flex mt-10">
        <div className="w-[40%]">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="w-[60%]">
          <h2>{product.name}</h2>
          <p className="text-red-600 text-[40px]">Giá: {product.price}</p>
          <p>Mô tả: {product.description}</p>
          <div className="w-full">
  <div className="w-full  relative">
    <img src="/background_offer_detail.png" alt="" className="position-absolute w-full h-[285px]" />
    <div className="position-relative ">
      <div className="flex">
        <AiTwotoneGift className="size-10 text-white"/>
        <span className="text-[30px] text-white">Khuyễn Mãi</span>
      </div>
      <div className="product_info mt-[10px] bg-white   rounded-b-2xl mx-2">
      + Tặng Gấu bông Galax Trị giá 100.000đ
      <br />
      + Tặng sổ tay A5 NC: Trị giá 100.000đ
      <br />
      + Tặng Túi/Balo laptop NC trị giá: 390.000đ
      <br />
      + Tặng Chuột không dây trị giá: 150.000đ
      <br />
      + Tặng Bàn di chuột trị giá: 50.000đ
      <br />
      + Tặng Bộ vệ sinh Laptop trị giá: 40.000đ
      <br />
      + Vệ sinh bảo dưỡng Laptop miễn phí trọn đời trị giá: 1 triệu
      đồng
      <br />
      + Giảm 10% khi mua thêm RAM, HDD laptop
      <br />+ Giảm 5% khi mua kèm Gear, Đế tản nhiệt Laptop
    </div>
    </div>
    
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
