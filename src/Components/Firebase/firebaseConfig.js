import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAUkBHT7ZpP3veMfvVYzfUGprF2CchS3tA",
  authDomain: "cvafire.firebaseapp.com",
  projectId: "cvafire",
  storageBucket: "cvafire.appspot.com",
  messagingSenderId: "436146930692",
  appId: "1:436146930692:web:a9b761e1d7bdbd9c086151",
  measurementId: "G-Q98SF6TK6T"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth, analytics }