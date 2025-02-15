import { useParams } from 'react-router-dom';

function UserProfilePage() {
  const { userId } = useParams(); // Access the userId parameter
  return <h1>User Profile: {userId}</h1>;
}

export default UserProfilePage;