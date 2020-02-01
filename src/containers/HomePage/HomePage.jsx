import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DirectoryMenuContainer } from './HomePage.styles';
import MenuItem from '../../components/MenuItem/MenuItem';
import {
  selectDirectorySections,
  selectIsDirectoryFetching,
} from '../../store/selectors/directory.selectors';
import { fetchSectionsStartAction } from '../../store/actions/directory.actions';
import Spinner from '../../components/Spinner/Spinner';

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsDirectoryFetching);
  const sections = useSelector(selectDirectorySections);

  useEffect(() => {
    dispatch(fetchSectionsStartAction());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <DirectoryMenuContainer>
      {sections.map(section => (
        <MenuItem key={section.id} section={section} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default HomePage;
