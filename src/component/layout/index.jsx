import  { useEffect, useState } from "react";
import { getProduct } from "../../api/product";
import BannerSmall from "./_component/BannerSmall";
import Header from "./_component/Header";
import MenuLayout from "./_component/MenuLayout";
import ProductItem from "./_component/ProductItem";
import Slider from "./_component/Slider";
import ProductDetailPage from "./_component/ProductDetailPage ";

const ShopLayOut = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProduct();
      console.log("🚀 ~ data:", data);
      setProducts(data);
    })();
  }, []);
  return (
    <div>
      <Header />
      <MenuLayout />
      <BannerSmall />
      <Slider />
      <ProductItem products={products}/>
    </div>
  );
};

export default ShopLayOut;
