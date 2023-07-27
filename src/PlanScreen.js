import React, { useEffect, useState } from 'react';
import './PlanScreen.css'
import db from './firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import { loadStripe } from '@stripe/stripe-js'; 

const PUBLIC_KEY = 'pk_test_51NY8EeHbUMIxUt2PXU6xhrXZclDys8gReqDRv6AWFbrQSL2QebQpBhidtq59D9HEDwajigd5wjgAHjf4EQ0oxtIH008E0plJ5A'
const SECRET_KEY = 'sk_test_51NY8EeHbUMIxUt2PXa9l4ynF7Wp8qJrvCGJZlnSqjpPbW0I6WUocSy2oxFXW5f4d5robarnZmU6byheXjDxsRtbf005GnZEZ4t'
function PlanScreen(props) {
    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => {
        const dbProduct = db.collection("products")
        dbProduct.where("active", "==", true)
        .get()
        .then((querySnapshot) => {
            const products = {}
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data()
                const priceSnap = await productDoc.ref.collection("prices").get()
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data(),
                    }
                })
            });
            setProducts(products)
        })
    }, [])
    console.log(products)

    const loadCheckout = async (priceId) => {
        const docRef = await db
        .collection("customers")
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        })
        
        docRef.onSnapshot(async(snap) => {
            const { error, sessionId } = snap.data()
            if (error) {
                alert(`An error occured: ${error.message}`)
            }
            if (sessionId) {
                const stripe = await loadStripe(PUBLIC_KEY)
                stripe.redirectToCheckout({sessionId})
            }
        })
    }
    return (
        <div className='plansScreen'>
           {Object.entries(products).map(([productId, productData]) => {
            return (
                <div className='plansScreen_plan'>
                    <div className='plansScreen_info'>
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={() => loadCheckout(productData.prices.priceId)}>Subsribe</button>
                    {/* <button>Subsribe</button> */}
                </div>

            )
           })} 
        </div>
    );
}

export default PlanScreen;