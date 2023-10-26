import AuthProvider from "../auth/provider";
import Footer from "../shared/footer";
import Header from "../shared/header";
type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};
const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <AuthProvider>
        <Header />
        {children}
        <Footer />
      </AuthProvider>
    </>
  );
};
export default BaseLayout;
