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
    const snapshot = await db.collection('resourceList').get();
    const list = snapshot.docs.map((doc) => doc.data());
    const finalList = await Promise.all(
      list.map(async ({ fileName, title, index }) => {
        const url = await docRef.child(fileName).getDownloadURL();
        return { title, url, index };
      }),
    );
    setFileList(finalList);
  };
  return (
    <div className="resources-contaner">
      <h1>Related Resources</h1>
      {fileList
        .sort((a, b) => {
          return a.index - b.index;
        })
        .map(({ title, url }) => (
          <ResourceItem key={title} title={title} url={url} />
        ))}
    </div>
  );
};

export default Resources;
