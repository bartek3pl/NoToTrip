import React, { FunctionComponent, useEffect, useState } from 'react';
import { Fade } from 'react-bootstrap';
import authorsData from '../../data/AuthorsData';
import './MobileAuthorsFigures.scss';

interface IProps {
  fullname: string;
  name: string;
  desc: string;
  img: string;
}

function getNameOfAuthor(index: number) {
  if (index < authorsData.length) return authorsData[index].name;
  return authorsData[0].name;
}

function handleOnClick(name: string) {
  const authors = document.querySelector('.authors');
  const firstAuthor = getNameOfAuthor(0);
  const secondAuthor = getNameOfAuthor(1);

  if (authors) {
    if (name === firstAuthor) {
      authors.classList.toggle('authors-mobile-click');
    } else if (name === secondAuthor) {
      authors.classList.toggle('authors-mobile-click2');
    }
  }
}

const MobileAuthorsFigures: FunctionComponent<IProps> = ({
  fullname,
  name,
  desc,
  img,
}) => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, [loaded]);

  return (
    <>
      <img
        src={img}
        className="img-authors-mobile"
        id={name}
        alt={fullname}
        onClick={() => {
          setOpen(!open);
          handleOnClick(name);
        }}
        style={{ opacity: loaded ? '1' : '0' }}
        onLoad={() => setLoaded(true)}
      />

      <Fade in={open}>
        <div className="mobile-description-block" id={`${name}-description`}>
          <i
            className="icon-cancel"
            id={`icon-${name}`}
            onClick={() => {
              setOpen(!open);
              handleOnClick(name);
            }}
          />
          <p className="mobile-description">
            <span className="author-header">{fullname}</span>
            {desc}
          </p>
        </div>
      </Fade>
    </>
  );
};

export default MobileAuthorsFigures;
