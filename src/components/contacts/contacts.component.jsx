import React, { useState, useEffect } from 'react';
import firebase from '../../util/firestore';
import ContactItem from '../contact-item/contact-item.component';

import './contacts.styles.scss';
const Contacts = () => {
  const [contactList, setContactList] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const snapshot = await db.collection('emailList').get();
    const list = snapshot.docs.map((doc) => doc.data());
    setContactList(list);
  };
  return (
    <div className="contacts-contaner">
      <h1>Contacts</h1>
      {contactList
        .sort((a, b) => {
          return a.index - b.index;
        })
        .map((info) => (
          <ContactItem key={info.name} info={info} />
        ))}
    </div>
  );
};

export default Contacts;
