import { useUser } from "../../Providers/UserProvider/UserProvider";

function Home() {
  const user = useUser();
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h2>Email: {user?.email}</h2>
        <p>Password: {user?.password}</p>
      </div>
    </div>
  );
}

export default Home;
