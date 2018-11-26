import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AlbumList from './List/AlbumList';
import AlbumItem from './Item/AlbumItem';

import styles from './Album.module.css';

const Album = props => {
  return (
    <div className={styles.album}>
      <Switch>
        <Route exact path="/album" component={AlbumList} />
        <Route path="/album/:number" component={AlbumItem} />
      </Switch>
    </div>
  );
};

export default Album;
