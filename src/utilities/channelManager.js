import {
    collection,
    getDocs,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const addChannel = async () => {
    let channelName = prompt("Please enter the channel name");
    /* ========= test firestore */
    try {
        const docRef = await addDoc(collection(db, "channels"), {
            name: channelName,
            timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    /* ========= test firestore */
};

export const getChannels = async () => {
    let channelsFromFirestore = [];
    const querySnapshot = await getDocs(collection(db, "channels"));
    querySnapshot.forEach((doc) => {
        channelsFromFirestore.push(doc);
    });
    // console.log(channelsFromFirestore[0].id, channelsFromFirestore[0].data().name);
    const channelItems = channelsFromFirestore.map((ch) => (
        <li key={ch.id}>{ch.data().name}</li>
    ));

    return channelItems;
};

export default addChannel;
