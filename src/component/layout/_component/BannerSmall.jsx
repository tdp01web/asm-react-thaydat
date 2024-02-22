
const BannerSmall = () => {
  return (
    <div>
      <div className="w-full flex justify-between fixed top-[127px] z-[-10]">
            <div className="fixed-left">
                <img className="w-[140px] rounded-xl" 
                src="/public/fixed-left.jpg" alt="" />
            </div>
            <div className="fixed-right">
                <img className="w-[140px] rounded-xl" 
                src="/public/fixed-right.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default BannerSmall
