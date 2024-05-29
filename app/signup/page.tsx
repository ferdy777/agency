import SignUpForm from "../components/SignForm";

const SignUpPage = () => {
  return (
    <div className=" lg:mt-[5.5rem] mt-[5rem] min-h flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
