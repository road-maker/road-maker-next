import Footer from "../shared/footer";
import Header from "../shared/header";
type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};
const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default BaseLayout;
