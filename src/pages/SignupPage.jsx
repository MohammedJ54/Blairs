import Header from "../components/Forms/Header";
import Signup from "../components/Forms/Signup";

export default function SignupPage() {
  return (
    <div className="flex justify-center">
      <div>
        {" "}
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
          
        />
        <Signup />
      </div>
    </div>
  );
}
