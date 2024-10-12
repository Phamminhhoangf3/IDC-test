import Card from "../card";

const About = ({ data }) => {
  return (
    <div className="container-about">
      <h2 className="about-title">ABOUT US</h2>
      <div className="about-list">
        {data.map(({ key, ...props }) => (
          <Card key={key} {...props} />
        ))}
      </div>
    </div>
  );
};

export default About;
