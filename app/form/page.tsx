import Form from "../components/Form";

const LoginPage = () => {
  return (
    <div className=" lg:mt-[5.5rem] mt-[5rem] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Log in
          </h2>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
