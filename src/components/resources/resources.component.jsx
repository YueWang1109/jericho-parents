import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../util/firestore';
import ResourceItem from '../resource-item/resource-item.component';

import './resources.styles.scss';
const Resources = () => {
  const [fileList, setFileList] = useState([]);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  const db = firebase.firestore();

  useEffect(() => {
    getMarker();
  }, []);
  const docRef = storageRef.child('docs');

  const getMarker = async () => {
    const snapshot = await db
      .collection('resourceList')
      .where('type', '<', 2)
      .get();
    const list = snapshot.docs.map((doc) => doc.data());
    const finalList = await Promise.all(
      list.map(async ({ fileName, title, index, type }) => {
        const url = await docRef.child(fileName).getDownloadURL();
        return { title, url, index, type };
      }),
    );
    setFileList(finalList);
  };
  return (
    <div className="resources-contaner">
      <h1>Related Resources</h1>
      <p>
        Please help us spreading words and also send our concerns to the elected
        officials below. Please feel free to use our following sample
        letters/emails. Thanks for your support!
      </p>
      {fileList
        .sort((a, b) => {
          return a.index - b.index;
        })
        .map(({ title, url, type }) => (
          <ResourceItem key={title} title={title} url={url} type={type} />
        ))}
    </div>
  );
};

export default Resources;
