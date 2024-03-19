
import react ,{ FC ,useMemo , useState} from 'react'

const  userMemoDemo: FC = () => {
    const [count ,setCount] = useState(0)
    const [nums1 ,setNums1] = useState([1,2,3,4,5])
    const [nums2 ,setNums2] = useState([1,2,3,4,5])
    const sum = useMemo(()=>{
        console.log("use memory");
        return nums1.reduce((p,c)=>p+c,0) + nums2.reduce((p,c)=>p+c,0)
    },[nums1,nums2])
    return (

        <div>{sum}</div>
       
    )
}

export default userMemoDemo;