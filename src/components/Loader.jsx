import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
        <p>Please wait Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
