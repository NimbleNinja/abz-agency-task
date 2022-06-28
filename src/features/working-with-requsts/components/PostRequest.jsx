import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { fetchPositions } from '../users.gateway';
import PositionItem from './PositionItem';
import './postrequest.scss';

const PostRequest = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPositions().then(data => setPositions(data));
  }, []);

  return (
    <article className="postrequest">
      <div className="container">
        <div className="postrequest__content">
          <h2 className="postrequest__title title">
            Working with POST request
          </h2>
          <form className="postrequest__form form">
            <input
              type="text"
              className="form__fullname input"
              placeholder="Your name"
            />
            <input
              type="text"
              className="form__email input"
              placeholder="Email"
            />
            <div className="form__phone">
              <input
                type="number"
                className="form__phone-input input"
                placeholder="Phone"
              />
              <span className="form__phone-label">+38 (XXX) XXX - XX - XX</span>
            </div>

            <div className="form__positions">
              <h4 className="form__positions-title">Select your position</h4>
              {positions.map(({ name, id }) => {
                return <PositionItem key={id} name={name} />;
              })}
            </div>

            <label className="form__upload" htmlFor="upload">
              <input type="file" name="upload" id="upload" />
              <span className="form__upload-btn">Upload</span>
              <span className="form__upload-text">Upload your photo</span>
            </label>

            <div className="form__btn">
              <Button content="Sing up" disabled={true} />
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default PostRequest;
