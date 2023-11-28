import { useAppDispatch } from '../app/hooks';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth, firebaseDB, usersRef } from '../utils/firebaseConfig';
import { FcGoogle } from 'react-icons/fc';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { setUserStatus } from '../app/slices/AppSlice';
import { LoginButton, LoginContainer } from '../UI/LoginButton';
function Login() {
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      const firestoreQuery = query(usersRef, where('uid', '==', uid));
      const fetchedUser = await getDocs(firestoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(collection(firebaseDB, 'users'), {
          uid,
          email,
        });
      }
      dispatch(setUserStatus({ email }));
    }
  };

  return (
    <LoginContainer>
      <LoginButton onClick={handleLogin}>
        <FcGoogle /> Login with Google
      </LoginButton>
    </LoginContainer>
  );
}

export default Login;
