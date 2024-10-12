import { useNavigate } from "react-router-dom";
import About from "../components/about";
import Carousel from "../components/carousel";

const dataCarousel = ["1", "2", "3"].map((item) => ({
  key: item,
  element: (
    <div
      class="background"
      style={{ backgroundImage: `url(${`/images/slider-${item}.png`})` }}
    >
      <div class="transbox">
        <div>Welcome to ICD VIETNAM</div>
      </div>
    </div>
  ),
  // <img src={`/images/slider-${item}.png`} alt={`slide-${item}`} />,
}));

const dataAbout = [
  {
    key: 1,
    image: "/images/about-1.png",
    title: "Teamwork spirit",
    description: "Teamwork is key to success; united, we achieve great things.",
  },
  {
    key: 2,
    image: "/images/about-2.png",
    title: "Self-improvement",
    description:
      "A company that promotes growth helps employees reach their potential.",
  },
  {
    key: 3,
    image: "/images/about-3.png",
    title: "Mutual support",
    description:
      "With mutual support, the team overcomes challenges and succeeds.",
  },
  {
    key: 4,
    image: "/images/about-4.png",
    title: "Vibrant setting",
    description:
      "An engaging environment is ideal for those pursuing innovation and learning.",
  },
];

function Home() {
  const navigate = useNavigate();
  function handleClickContract() {
    navigate("/contract");
  }

  return (
    <>
      <Carousel data={dataCarousel} />
      <About data={dataAbout} />
      <div className="wrap-contract-btn">
        <button className="contract-btn" onClick={handleClickContract}>
          CONTRACT
        </button>
      </div>
    </>
  );
}

export default Home;
