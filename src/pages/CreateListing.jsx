 import {useState, useEffect, useRef} from 'react'
 import {getAuth, onAuthStateChanged} from 'firebase/auth'
 import {useNavigate} from 'react-router-dom'
 import Spinner from '../components/Spinner'

 function CreateListing() {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms:1,
    parking: false,
    furnished: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0
  });

  const auth =getAuth()
  const navigate = useNavigate()
  const isMounted =useRef(true)
  useEffect(() => {
    if(isMounted){
      onAuthStateChanged(auth, (user)=>{
        if(user){
          serFormData({...formData, useRef:user.uid})
        }else{
          navigate('/sign-in')
        }
      })
    }
  
    return () => {
      isMounted.current=false
    }
  }, [isMaounted])
  

  return (
    <div>CreateListing</div>
  )
}

export default CreateListing