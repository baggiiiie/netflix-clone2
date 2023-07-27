import React, { useEffect, useState } from 'react';
import './PlanScreen.css'
import db from './firebase'
import {
    // where,
    // collection,
    // dbProduct,
} from './firebase'
import { where, QuerySnapshot } from 'firebase/firestore';

function PlanScreen(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const dbProduct = db.collection("products")

        dbProduct.where("active", "==", true)
        .get()
        .then((QuerySnapshot) => {
            const products = {}
            QuerySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data()
                const priceSnap = await productDoc.ref.collection("prices").get()
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            });
            setProducts(products)
        })
    }, [])
    console.log(products)


    return (
        <div>
            
        </div>
    );
}

export default PlanScreen;