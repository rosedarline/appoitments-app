import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <p>Hello! I am Rose Adam. I created Natural Hairpedia to help those who are struggling to embrace their natural hair and want help finding the best products, treatments, and routines for their hair types. My goal is inspire you on your natural hair journey and to create a space for us to learn from each other. Please check out our blogs at <a href="https://naturalhairpedia.com/" target="_blank" rel="noreferrer">Natural Hairpedia</a></p>

      <Link to="/">Go Back</Link>
    </>
  );
};

export default About;
