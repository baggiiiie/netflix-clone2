import React, { useEffect, useState } from 'react';
import './PlanScreen.css';
import db from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from "../features/counter/userSlice";
import { loadStripe } from '@stripe/stripe-js';

const PUBLIC_KEY = 'pk_test_51NY8EeHbUMIxUt2PXU6xhrXZclDys8gReqDRv6AWFbrQSL2QebQpBhidtq59D9HEDwajigd5wjgAHjf4EQ0oxtIH008E0plJ5A';
function PlanScreen(props) {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        db.collection("customers")
            .doc(user.uid)
            .collection("subscriptions")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(async subscription => {
                    setSubscription({
                        role: subscription.data().role,
                        current_period_end: subscription.data().current_period_end.seconds,
                        current_period_start: subscription.data().current_period_start.seconds,
                    });
                });
            });
    }, [user.uid]);

    useEffect(() => {
        const dbProduct = db.collection("products");
        dbProduct.where("active", "==", true)
            .get()
            .then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async productDoc => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection("prices").get();
                    priceSnap.docs.forEach(price => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data(),
                        };
                    });
                });
                setProducts(products);
            });
    }, []);
    // console.log(products)

    const loadCheckout = async (priceId) => {
        const docRef = await db
            .collection("customers")
            .doc(user.uid)
            .collection("checkout_sessions")
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();
            if (error) {
                alert(`An error occured: ${ error.message }`);
            }
            if (sessionId) {
                const stripe = await loadStripe(PUBLIC_KEY);
                stripe.redirectToCheckout({ sessionId });
            }
        });
    };
    return (
        <div className='plansScreen'>
            {subscription ?
                (<p>Renewal date: &nbsp;
                    {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}
                </p>) :
                <p>No subscription</p>
            }

            {Object.entries(products).map(([productId, productData]) => {
                const isCurrentPackage = productData.name
                    ?.toLowerCase()
                    .includes(subscription?.role);
                const currentPackage = subscription?.role;
                console.log(currentPackage);

                return (
                    <div
                        className={`${ isCurrentPackage && "plansScreen_plan--disabled"
                            } plansScreen_plan`}
                        key={productId}>
                        <div className='plansScreen_info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button
                            onClick={() =>
                                !isCurrentPackage && loadCheckout(productData.prices.priceId)
                            }
                        >
                            {isCurrentPackage ? "Current Package" : "Subscribe"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default PlanScreen;