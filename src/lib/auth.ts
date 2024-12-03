import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'sonner';
import { auth, db, googleProvider } from './firebase';
import { useAuthStore } from '../store/authStore';

export const signUp = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email,
      name,
      role: 'business',
      createdAt: new Date().toISOString()
    });

    toast.success('Account created successfully!');
  } catch (error: any) {
    const errorMessage = error.code === 'auth/email-already-in-use' 
      ? 'Email already in use. Please try signing in instead.'
      : error.message || 'Failed to create account';
    toast.error(errorMessage);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success('Successfully signed in!');
  } catch (error: any) {
    const errorMessage = error.code === 'auth/invalid-credential'
      ? 'Invalid email or password'
      : error.message || 'Failed to sign in';
    toast.error(errorMessage);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    
    // Create/update user document
    await setDoc(doc(db, 'users', result.user.uid), {
      email: result.user.email,
      name: result.user.displayName || 'Business User',
      role: 'business',
      createdAt: new Date().toISOString()
    }, { merge: true });
    
    toast.success('Successfully signed in with Google!');
  } catch (error) {
    console.error('Google sign in error:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    toast.success('Successfully signed out!');
  } catch (error: any) {
    console.error('Sign out error:', error);
    toast.error('Failed to sign out');
    throw error;
  }
};

export const initializeAuth = () => {
  const { setUser, setLoading } = useAuthStore.getState();
  setLoading(true);

  const unsubscribe = onAuthStateChanged(auth, 
    (user) => {
      if (user) {
        setUser({
          id: user.uid,
          email: user.email!,
          name: user.displayName || 'Business User',
          role: 'business'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    },
    (error) => {
      console.error('Auth state error:', error);
      setLoading(false);
      setUser(null);
    }
  );

  return unsubscribe;
};