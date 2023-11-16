import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default function HomePage({ ...props }) {
  return (
    <>
      <Header />
      <Main {...props} />
      <Footer />
    </>
  )
}
