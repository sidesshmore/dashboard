import "./featuredinfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowUpward } from "@mui/icons-material";

function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">PAISA</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹25,156</span>
                <span className="featuredMoneyRate">-12.3%<ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
                <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹35,278</span>
                <span className="featuredMoneyRate">-1.3%<ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
                <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">₹30,669</span>
                <span className="featuredMoneyRate">+7.8%<ArrowUpward className="featuredIcon"/></span>
            </div>
                <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo