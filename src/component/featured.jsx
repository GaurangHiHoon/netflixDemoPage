import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />

      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis
          sapiente eos minus rem minima deleniti quis illo? Numquam, eius!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
