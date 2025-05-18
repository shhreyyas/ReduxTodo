import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unsubscribe } from "../../redux/subscriptionSlice";

const Subscribe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.subscription.subscriberInfo);

  const handleUnsubscribe = () => {
    dispatch(unsubscribe());
    navigate("/");
  };

  if (!user) return <div className="p-4 text-red-500">No subscriber selected.</div>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Subscribed User</h2>
      <p className="text-gray-700 mb-2"><strong>Name:</strong> {user.name}</p>
      <p className="text-gray-700 mb-4"><strong>Email:</strong> {user.email}</p>
      <button
        onClick={handleUnsubscribe}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Unsubscribe
      </button>
    </div>
  );
};

export default Subscribe;
