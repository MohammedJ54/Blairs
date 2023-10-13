import Header from "../components/Forms/Header";
import Login from "../components/Forms/Login";

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <div>
        {" "}
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        
        />
        <Login />
      </div>
    </div>
  );
}
