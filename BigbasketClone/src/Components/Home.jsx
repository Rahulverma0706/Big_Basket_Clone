import ItemCard from "./ItemCard"
import TopOffers from "./TopOffers"

const Home = () => {
    const styles ={
        container:{
            marginTop:'50px',
            display:'flex',
            margin:'auto',
            width:'80%',
            objectFit:'contain'
        },
        image: {
            width: "15%",
            margin:'auto',
            objectFit: "contain",
        },
    }
  return (
    <>
    <div className="container" style={styles.container}>
        <img className="image"  style={styles.image} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_01.png?tr=w-1920,q=80" alt="" />
        <img className="image" style={styles.image} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_02.png?tr=w-1920,q=80" alt="" />
        <img className="image" style={styles.image} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_03.png?tr=w-1920,q=80" alt="" />
        <img className="image" style={styles.image} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_04.png?tr=w-1920,q=80" alt="" />
        <img className="image" style={styles.image} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_05.png?tr=w-1920,q=80" alt="" />
        <img className="image" style={styles.image} src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_06.png?tr=w-1920,q=80" alt="" />
    </div>
    <ItemCard/>
    <TopOffers/>
    
    </>
  )
}
export default Home
