import React, { FunctionComponent, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import './AuthorsFigures.scss';

interface IProps {
  fullname: string;
  desc: string;
  img: string;
}

const AuthoresFigures: FunctionComponent<IProps> = ({
  fullname,
  desc,
  img,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, [loaded]);

  return (
    <Col xl={8} lg={10} md={12}>
      <Zoom bottom delay={100}>
        <div className="authors-block">
          <div
            className="img-authors-animate"
            style={{ opacity: loaded ? '1' : '0' }}
          >
            <img
              src={img}
              className="img-authors d-block"
              alt={fullname}
              onLoad={() => setLoaded(true)}
            />
          </div>
          <p className="authors-description">
            <span className="authors-header">{fullname}</span>
            {desc}
          </p>
        </div>
      </Zoom>
    </Col>
  );
};

export default AuthoresFigures;
