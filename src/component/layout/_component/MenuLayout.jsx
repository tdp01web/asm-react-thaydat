import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import LaptopIcon from '@mui/icons-material/Laptop';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import MouseIcon from '@mui/icons-material/Mouse';
import MonitorIcon from '@mui/icons-material/Monitor';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import RedditIcon from '@mui/icons-material/Reddit';
import PrintSharpIcon from '@mui/icons-material/PrintSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function MenuLayout() {
  return (
    <div className='w-full bg-[#005091] flex justify-center '>
        <div className='w-[80%] h-[50px] flex items-center justify-between'>
            <div>
                <section>
                <div className="flex items-center w-[200px] h-[30px] bg-white border rounded-lg  justify-center">
                    <DensityMediumIcon style={{ fontSize: 18, color: '#0F5B9E'}}/>
                    
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'#0F5B9E',fontWeight:600}}><span>DANH MỤC SẢN PHẨM</span>  </span>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <LaptopIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12,marginLeft:4, color:'white',fontWeight:600}}><span>LapTop</span>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <AdUnitsIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><span>PC</span>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <PrintSharpIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><span>Linh Kiện PC</span>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <MonitorIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><span>Màn Hình</span>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <MouseIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><span>Phím Chuột Ghế Gear</span>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <LocalPrintshopIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><span>Thiết Bị Văn Phòng</span>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center ">
                    <RedditIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><span>Phòng Net -  Quán Net</span>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
        </div>
    </div>
  );
}

export default MenuLayout;
